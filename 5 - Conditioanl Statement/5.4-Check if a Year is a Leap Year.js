function isLeapYear(year) {
    // Write your logic here
    return ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) ? "Leap Year" : "Not a Leap Year";
    
}

module.exports = { isLeapYear };