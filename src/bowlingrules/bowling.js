'use strict'

function calculateScore(throws){
    var total = 0;
    for (var i=0; i<throws.length; i++) {
        if (throws[i] === 10)   {
            throws[i+1] += throws[i+2] + throws[i+3];
        }
        else if (throws[i]<10 && throws[i] + throws[i+1] === 10) {
            throws[i+1] += throws[i+2];
        } else {
            throws[i+1] == throws[i+1];
        }
        total += throws[i];
    }
    

    return total;
}




module.exports.calculateScore = calculateScore;


