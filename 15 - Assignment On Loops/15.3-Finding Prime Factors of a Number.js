class Solution {
    prime_factors(nStr) {
        let num = Number(nStr);
        if (num === 0 || num === 1) return "No prime factors";

        let result = "";

        // factor out 2
        while (num % 2 === 0) {
            result += "2\n";
            num /= 2;
        }

        // factor out odd numbers using sqrt
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            while (num % i === 0) {
                result += i + "\n";
                num /= i;
            }
        }

        // if remaining number is prime
        if (num > 1) {
            result += num + "\n";
        }

        return result.trim();
    }
}

module.exports = Solution;
