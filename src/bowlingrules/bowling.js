'use strict'

function calculateScore(throws){
    var total = 0, j = throws.length;
    for (var i=0; i<(throws.length-2); i++) {
        if (throws[j-2] + throws[j-1] < 10) {
            throws[j] == 0
        }
        else if (throws[i] === 10 && throws[i+2] === 10) {
            throws[i] += throws[i+2] + throws[i+4];
        }
        else if (throws[i] === 10)   {
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

/*
function calculateScore(throws) {
    var total = 0;
    for (var i=0; i<throws.length; i++) {

        switch(throws)  {
            case throws[i] === 10 && throws[i+2] === 10:
                throws[i+1] += throws[i+2] + throws[i+4];
                break;
            case throws[i] === 10 && throws[i+2] + throws[i+3] === 10:
                throws[i+1] += throws[i+2] + throws[i+3];
                break;
            case throws[i] < 10 && throws[i] + throws[i+1] === 10:
                throws[i+1] += throws[i+2];
                break;
            default:
                throws[i+1] == throws[i+1];
        }
        total += throws[i];
    }
    return total;
}
*/


module.exports.calculateScore = calculateScore;


