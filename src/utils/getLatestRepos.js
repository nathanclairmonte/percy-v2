export const getLatestRepos = async (myInfo, maxNum = 6) => {
    // github api link
    const gitApiUrl = `https://api.github.com/search/repositories?q=user:${myInfo.gitUsername}+sort:updated`;
    try {
        const res = await fetch(gitApiUrl, { method: "GET" });
        const data = await res.json();
        const latestRepos = data.items.splice(0, maxNum);
        return latestRepos;
    } catch (error) {
        console.log(error);
    }
};
