'use strict'


/* if/else
function calculateScore(throws){
    var total = 0, j = throws.length;
    for (var i=0; i<(j-1); i++) {
        if (i === 18 && throws[i] === 10)  {
            throws[i] += throws[i+1] += throws[i+2];throws[i+1] = 0;
        }
        else if (throws[i] === 10 && throws[i+2] === 10) {
            throws[i] += throws[i+2] + throws[i+4];
        }
        else if (throws[i] === 10)   {
            throws[i] += throws[i+2] + throws[i+3];
        }
        else if (throws[i] < 10 && throws[i+1] < 10 && throws[i] + throws[i+1] === 10) {
            throws[i] += throws[i+1] + throws[i+2];throws[i+1] = 0;
        }
        else {
            throws[i+1] == throws[i+1];
        }
        total += throws[i];
    }
    return total;
}
*/

/*/ switch + functions


function calculateScore(throws){

    function finalFrameStrike() {
        return throws[i] += throws[i+1] += throws[i+2], throws[i+1] = 0;
    }
    function double()   {
        return throws[i] += throws[i+2] + throws[i+4];
    }
    function strike()   {
        return throws[i] += throws[i+2] + throws[i+3];
    }
    function spare()    {
        return throws[i] += throws[i+1] + throws[i+2], throws[i+1] = 0;
    }

    var total = 0, j = throws.length;
    
    for (var i=0; i<(j-1); i++) {
        switch(true)  {
            case i === 18 && throws[i] === 10:
                    finalFrameStrike();
                    break;
            case throws[i] === 10 && throws[i+2] === 10:
                    double();
                    break;
            case throws[i] === 10:
                    strike();
                    break;
            case throws[i] < 10 && throws[i+1] < 10 && throws[i] + throws[i+1] === 10:
                    spare();
                    break;
            default:
                    throws[i+1] == throws[i+1];
        }

        total += throws[i];
    }
    return total;
    
}
*/

/*
function calculateScore(throws){
    var total = 0, j = throws.length;
    

    function isFinalFrameStrike() {
        return (i === 18 && throws[i] === 10 ? finalFrameStrike() : isDouble());
    }
    function isDouble()    {
        return (throws[i] === 10 && throws[i+2] === 10? double() : isStrike());
    }
    function isStrike()    {
        return (throws[i] === 10 ? strike(): isSpare());
    }
    function isSpare()     {
        return (throws[i] < 10 && throws[i+1] < 10 && throws[i] + throws[i+1] === 10 ? spare() : throws[i+1] == throws[i+1]);
    }
    function finalFrameStrike() {
        return throws[i] += throws[i+1] += throws[i+2],throws[i+1] = 0;
    }
    function double()   {
        return throws[i] += throws[i+2] + throws[i+4];
    }
    function strike()   {
        return throws[i] += throws[i+2] + throws[i+3];
    }
    function spare()    {
        return throws[i] += throws[i+1] + throws[i+2],throws[i+1] = 0;
    }
    for (var i=0; i<(j-1); i++) {
        isFinalFrameStrike(i);
        total += throws[i];
    }

    return total;
}

*/

let frames = Array(10).fill(0);

function isFinalFrameStrike(x,y)  {
    return x === 18 && y === 10;
}
function isDouble(x,y)    {
    return x === 10 && y === 10;    
}
function isStrike(x)    {
    return x === 10;
}
function isSpare(x,y)   {
    return x < 10 && y < 10 && x + y === 10;
}
function finalFrameStrike() {
     frames[10] = throws[19] + throws[20] + throws[21];
}
function double(x)   {
     frames[x] = throws[x] + throws[x+2] + throws[x+4];
     return frames;
}
function strike(x)   {
     frames[x] = throws[x] + throws[x+2] + throws[x+3];
     return frames;
}
function spare(x)    {
     frames[x] = throws[x] + throws[x+1] + throws[x+2];
     return frames;
} 
function normal(x,y,z)    {
     return x = 1 + 1;
}   

function calculateScore(throws){
    var total = 0, j = throws.length;
    
    for (var i=0; i<(j-1); i++) {
        switch(true)  {
            case isFinalFrameStrike(i, throws[i]):
                    finalFrameStrike();
                    break;
            case isDouble(throws[i],throws[i+2]):
                    double(i/2);
                    break;
            case isStrike(throws[i]):
                    strike(i/2);
                    break;
            case isSpare(throws[i], throws[i+1]):
                    spare(i/2);
                    break;
            default:
                    frames[0] = 1+2;
                    //normal(frames[i/2],throws[i],throws[i+1]);
        }
    }
    
}

function calculateTotal(frames){
    var total = 0, k = frames.length;
    for (var l=0; l<(k-3); l+=2)    {

    total += frames[l];
    }
    return total;
}



module.exports.calculateScore = calculateScore;
module.exports.calculateTotal = calculateTotal;
/*module.exports.finalFrameStrike = finalFrameStrike;
module.exports.double = double;
module.exports.strike = strike;
module.exports.spare = spare;
module.exports.isFinalFrameStrike = isFinalFrameStrike;
module.exports.isDouble = isDouble;
module.exports.isStrike = isStrike;
module.exports.isSpare = isSpare;
*/
