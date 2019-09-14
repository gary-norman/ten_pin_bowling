'use strict'

function calculateScore(throws){
    var total = 0;
    for (var i=0; i<throws.length; i++) {
        total += throws[i];
    }
    return total;
}

module.exports.calculateScore = calculateScore;


