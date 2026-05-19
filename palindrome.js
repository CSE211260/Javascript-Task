function isPalindrome(str) {
    let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reversedStr = cleanStr.split("").reverse().join("");

    return cleanStr === reversedStr;
}


console.log(isPalindrome("racecar")); // Output: true