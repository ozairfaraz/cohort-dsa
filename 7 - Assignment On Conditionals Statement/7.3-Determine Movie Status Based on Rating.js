class Solution {
    get_movie_status(ratingStr) {
        const star = Number(ratingStr);
        if (star <= 2.0) return "Flop";
        else if (star <= 3.4) return "Semi-hit";
        else if (star <= 4.5) return "Hit";
        else return "Super Hit";
    }
}
module.exports = Solution;
