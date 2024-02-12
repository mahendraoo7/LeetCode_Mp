/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    const n = s.length;
    const dp = Array.from({ length: n }, () => Array(n).fill(false));
    let count = 0;

    for (let i = 0; i < n; ++i) {
        dp[i][i] = true;
        count++;
    }

    for (let i = 0; i < n - 1; ++i) {
        if (s[i] === s[i + 1]) {
            dp[i][i + 1] = true;
            count++;
        }
    }

    for (let len = 3; len <= n; ++len) {
        for (let i = 0; i <= n - len; ++i) {
            const j = i + len - 1;
            if (dp[i + 1][j - 1] && s[i] === s[j]) {
                dp[i][j] = true;
                count++;
            }
        }
    }

    return count;
};