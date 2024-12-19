export const autobust = async (
  userNames: string[],
  maxPlayCnt: number,
  maxScore: number,
) => {
  for (let i = 0; i < userNames.length; i++) {
    // register
    const registerRes = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: userNames[i],
        userPwd: "autobust123!",
      }),
    });

    for (let f = 0; f < Math.floor(Math.random() * maxPlayCnt); f++) {
      setTimeout(async () => {
        const scoreRes = await fetch("/api/score", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: userNames[i],
            score: Math.floor(Math.random() * maxScore),
          }),
        });
      }, 1000);
    }
  }
};
