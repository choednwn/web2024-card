import { Pool, createPool } from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

// 데이터베이스 연결 풀 생성
const pool: Pool = createPool({
    host: process.env.DB_HOST || 'cwooju.com', // 환경 변수로 처리
    user: process.env.DB_USER || 'admin',
    password: process.env.DB_PASSWORD || 'webcard2024',
    database: process.env.DB_DATABASE || 'webcard',
    port: Number(process.env.DB_PORT) || 3306, // 포트는 숫자로 변환
    waitForConnections: true,
    connectionLimit: 10, // 연결 제한 수
    queueLimit: 0,       // 대기열 제한 없음
});

// 데이터베이스 연결 확인 함수
export async function checkDbConnection(): Promise<void> {
    try {
        const connection = await pool.promise().getConnection(); // Promise 기반 연결
        console.log('Database connection successful!'); 
        connection.release(); // 연결 해제
    } catch (err) {
        console.error('Database connection failed:', err);
        throw err; 
    }
}

/*
  executeQuery는 쿼리를 실행하고 결과를 반환하는 함수
  쿼리 실행 중 에러가 발생하면 에러 메시지를 출력
  
  @param query - 실행할 SQL 쿼리 문자열
  @param values - 쿼리에 삽입할 값 배열
  @returns Promise<any> - 쿼리 결과를 반환하는 Promise
*/

// executeQuery 함수: 쿼리를 실행하고 결과를 반환
export async function executeQuery<T>(query: string, values: any[] = []): Promise<T> {
    if (!pool) {
        throw new Error("DB pool has not been initialized");
    }

    try {
        const [results] = await pool.promise().query(query, values); // Promise 기반 쿼리 실행
        return results as T; // 결과를 제네릭 타입으로 반환
    } catch (err) {
        console.error('Database query error:', err);
        throw err; // 쿼리 에러 발생 시 에러 던짐
    }
}
