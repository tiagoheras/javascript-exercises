const reverseString = function(string) {
    let reversedString = '';
    let reversedCharacters = [];

    for(let i = string.length; i > 0; i--) {
        const lastCharacter = string.charAt(i-1);
        reversedCharacters.push(lastCharacter);
    }

    reversedString = reversedCharacters.join('').toString();
    return reversedString;
}

module.exports = reverseString
