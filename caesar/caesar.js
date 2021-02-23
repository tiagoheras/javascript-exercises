const caesar = function (message, lugares) {
    let encodedMessage = [];
    for (let charIndex = 0; charIndex < message.length; charIndex++) {
        const char = message.charAt(charIndex);
        const charUnicode = message.charCodeAt(charIndex);
        const encodedUnicode = charUnicode + lugares;

        if (charUnicode <= 90 && charUnicode >= 65 || charUnicode <= 122 && charUnicode >= 97) {
            let unicode;
            if (char.toLowerCase() === char) {
                if (encodedUnicode < 97) {
                    let result = encodedUnicode;
                    do {
                        result = 122 - (96 - result);
                    } while (result < 97);
                    unicode = result;
                } else if (encodedUnicode > 122) {
                    let result = encodedUnicode;
                    do {
                        result = 97 + (result - 123);
                    } while (result > 122);
                    unicode = result;
                } else {
                    unicode = encodedUnicode;
                }
            } else {
                if (encodedUnicode < 65) {
                    let result = encodedUnicode;
                    do {
                        result = 90 - (64 - result);
                    } while (result < 65);
                    unicode = result;
                } else if (encodedUnicode > 90) {
                    let result = encodedUnicode;
                    do {
                        result = 65 + (result - 91);
                    } while (result > 90);
                    unicode = result;
                } else {
                    unicode = encodedUnicode;
                }
            }
            encodedMessage.push(unicode)
        } else {
            encodedMessage.push(charUnicode);
        }
    }
    const result = encodedMessage.map(unicode => {
        return String.fromCharCode(unicode)
    }).join('')
    return result;
    //     let encodedMessage = [];
    //     for (let charIndex = 0; charIndex < message.length; charIndex++) {
    //         const charUnicode = message.charCodeAt(charIndex);
    //         const encodedUnicode = charUnicode + lugares;
    //         let unicode;
    //         console.log(encodedUnicode);

    //         if (charUnicode >= 65 && charUnicode <= 90) {
    //             if (encodedUnicode < 65) {
    //                 unicode = 90 - (65 - encodedUnicode - 1);
    //             } else if (encodedUnicode > 90 && encodedUnicode < 97) {
    //                 unicode = (encodedUnicode - 90 - 1) + 65;
    //             }
    //         } else if (charUnicode >= 97 && charUnicode <= 122) {
    //             if (encodedUnicode < 97 && encodedUnicode > 90) {
    //                 unicode = 122 - (97 - encodedUnicode - 1);
    //             } else if (encodedUnicode > 122) {
    //                 unicode = (encodedUnicode - 122 - 1) + 97;
    //             }
    //         } else {
    //             unicode = charUnicode;
    //         }
    //         encodedMessage.push(unicode);
    //     }
    //     console.log(encodedMessage);
    //     const result = encodedMessage.map(unicode => {
    //         return String.fromCharCode(unicode);
    //     })
    //     return result.join('');
}

console.log(caesar('Hello, World!', -29));

module.exports = caesar
