function printRightTriangleAlphabets(n) {
    let alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    for(let i=1;i<=n;i++){
        for(let j=1;j<=i;j++){
            process.stdout.write(alphabets[j-1] + " ");
        }
        process.stdout.write("\n")
    }   
}

module.exports = { printRightTriangleAlphabets };