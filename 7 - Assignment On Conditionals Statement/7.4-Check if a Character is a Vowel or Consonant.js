class Solution {
    check_char(ch) {
        const vowels = "aeiou";
        const consonants = "bcdfghjklmnpqrstvwxyz";
        const letter = ch.toLowerCase();
        if (vowels.includes(letter)) return "Vowel";
        if (consonants.includes(letter)) return "Consonant";
        return "Invalid input";
    }
}

module.exports = Solution;