const palindromes = function(frase) {
    let fraseArray = Array.from(frase);
    const formatedFrase = fraseArray.filter(character => {
        if(character !== '.' && character !== ',' && character !== ' ' && character !== '!') {
            return true;
        }
    }).join('').toLowerCase();

    const reversedFrase = formatedFrase.split('').reverse().join('').toLowerCase();

    if(formatedFrase === reversedFrase) {
        return true;
    } else {
        return false;
    }    
}

module.exports = palindromes
