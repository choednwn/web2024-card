import express from 'express';
import bodyParser from 'body-parser';
import { checkDbConnection, executeQuery } from '@/backend/db'; // 클라이언트와 서버 공통 모듈 임포트
import { hashSHA256, validatePassword } from '@/lib/utils';
import { NextApiRequest, NextApiResponse } from 'next';
import { register_member} from '@/backendlib/Users';

// Type Definitions
type Data = {
    success: boolean;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method !== "POST") {
        return res.status(405).end(); // Method Not Allowed
    }

    const { userId, userPwd } = req.body;

    // 기본적인 유효성 검사
    if (!userId || !userPwd) {
        return res.status(400).json({ success: false});
    }

    // 비밀번호 유효성 검사
    if (!validatePassword(userPwd)) {
        return res.status(400).json({
            success: false,
        });
    }

    try {
        // ID 중복 확인
        const existingUser = await register_member(userId);

        if (existingUser) {
            return res.status(400).json({ success: false });
        }

        // 비밀번호 해시
        const passwordHash = await hashSHA256(userPwd);

        // 데이터베이스에 사용자 추가
        const query = 'INSERT INTO Users ( userId, userPwd, highscore) VALUES (?, ?, 0)';
        const values = [userId, passwordHash]; // 여기에 username도 추가해야 할 경우를 대비
        await executeQuery(query, values);

        return res.status(201).json({ success: true });
    } catch (error) {
        console.error('Error adding user:', error);
        return res.status(500).json({ success: false });
    }
}
