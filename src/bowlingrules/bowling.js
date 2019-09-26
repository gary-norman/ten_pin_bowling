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
/*

*/

/*
function calculateScore(throws){
    var total = 0, j = throws.length;
    
    for (var i=0; i<(j-1); i++) {
        switch(true)  {
            case isFinalFrameStrike(i, throws[i]):
                    frameScore(throws[i], throws[i+1], throws[i+2]);
                    break;
            case isDouble(throws[i],throws[i+2]):
                    frameScore(throws[i], throws[i+2], throws[i+4]);
                    break;
            case isStrike(throws[i]):
                    frameScore(throws[i], throws[i+2], throws[i+3]);
                    break;
            case isSpare(throws[i], throws[i+1]):
                    frameScore(throws[i], throws[i+1], throws[i+2]);
                    break;
            default:
                    frameScore(null,throws[i],throws[i+1]);
        }
        total += throws[i];
    }
    return total;
    */

   /*function Frame(throw1, throw2)  {
    this.throwOne = throw1;
    this.throwTwo = throw2;
}*/

    class Frame {
        constructor(score1, score2, score3) {
        this.scoreOne = score1;
        this.scoreTwo = score2;
        this.scoreThree = score3;
        this.total = this.scoreOne + this.scoreTwo + this.scoreThree;
    }}
    function isFinalFrameStrike(x,y)  {
    return x === 18 && y === 10;
    }
    function isFinalFrameDouble(x,y,z)  {
        return x === 18 && y === 10 && z === 10;
        }
    function isDouble(x,y)    {
    return x === 10 && y === 10;    
    }
    function isStrike(x)    {
    return x === 10;
    }
    function isPostStrikeSpare(x,y,z)   {
    return x < 10 && y < 10 && x + y === 10 && z === 10;
    }
    function isPostStrikeNormal(x,y,z)   {
        return x < 10 && y < 10 && z === 10;
        }
    function isSpare(x,y)   {
    return x < 10 && y < 10 && x + y === 10;
    }

    function normal(frames,w,x,y,z)    {
        frames[w] = new Frame(x, y, z);
    }

function calculateTotal(frames, framesObjects, throws){
    let j=0, total = 0;
    for(var i=0;i<frames.length;i++) {

        switch(true)  {
            case isFinalFrameDouble(j, throws[j], throws[j-2]):
                    frames[i] = new Frame(throws[j], throws[j+1], throws[j+2]),
                    frames[i-1].scoreThree = throws[j+2], j++, j++,
                    frames[i-1].total = frames[i-1].scoreOne + frames[i-1].scoreTwo + frames[i-1].scoreThree;
                    break;
            case isFinalFrameStrike(j, throws[j]):
                    frames[i] = new Frame(throws[j], throws[j+1], throws[j+2]), j++, j++,
                    frames[i-1].total = frames[i-1].scoreOne + frames[i-1].scoreTwo + frames[i-1].scoreThree;
                    break;
            
            case isDouble(throws[j],throws[j-2]):
                    frames[i] = new Frame(throws[j], throws[j+2], null),
                    frames[i-1].scoreThree = throws[j+2], j++, j++,
                    frames[i-1].total = frames[i-1].scoreOne + frames[i-1].scoreTwo + frames[i-1].scoreThree;
                    break;
            case isStrike(throws[j]):
                    frames[i] = new Frame(throws[j], throws[j+2], null), j++, j++;
                    break;
            case isPostStrikeSpare(throws[j], throws[j+1], throws[j-2]):
                       frames[i] = new Frame(throws[j], throws[j+1], throws[j+2]),
                       frames[i-1].scoreThree = throws[j+1], j++, j++,
                       frames[i-1].total = frames[i-1].scoreOne + frames[i-1].scoreTwo + frames[i-1].scoreThree;
                        break;
            case isSpare(throws[j], throws[j+1]):
                    frames[i] = new Frame(throws[j], throws[j+1], throws[j+2]), j++, j++;
                    break;
            case isPostStrikeNormal(throws[j], throws[j+1], throws[j-2]):
                        frames[i] = new Frame(throws[j], throws[j+1], null),
                        frames[i-1].scoreThree = throws[j+1], j++, j++,
                        frames[i-1].total = frames[i-1].scoreOne + frames[i-1].scoreTwo + frames[i-1].scoreThree;
                         break;
            default:
                normal(i,throws[j], throws[j+1], null), j++, j++    
            //frames[i] = new Frame(throws[j], throws[j+1], null), j++, j++;
        }
        //total += frames[i].total;
    }
    for(var k=0;k<frames.length;k++) {
        total += frames[k].total;
    }
    for(var l=0;l<frames.length;l++) {
        framesObjects[l] = (Object.values(frames[l]));
    }
    return total;
    }
    
    



//module.exports.calculateScore = calculateScore;
module.exports.calculateTotal = calculateTotal;

