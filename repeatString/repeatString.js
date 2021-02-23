const repeatString = function(string, reps) {
    let resultString = '';
    if(reps < 0) {
        return 'ERROR';
    }
    for(let i = reps; i > 0; i--) {
        resultString += string;
    }
    return resultString;
}

module.exports = repeatString
