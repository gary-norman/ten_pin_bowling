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
    function isFinalFrameTurkey(w,x,y,z)  {
        return w === 18 && x === 10 && y === 10 && z === 10;
    }
    function isFinalFrameStrike(x,y)  {
        return x === 18 && y === 10;
    }
    function isFinalFrameDouble(x,y,z)  {
        return x === 18 && y === 10 && z === 10;
    }
    function isFinalDoubleSpare(v,w,x,y,z)  {
        return v === 18 && w === 10 && x === 10 && y < 10 && y + z === 10;
    }
    function isFinalStrikeSpare(w,x,y,z)  {
        return w === 18 && x === 10 && y < 10 && y + z === 10;
    }
    function isFinalSpareSpare(v,w,x,y,z)  {
        return v === 18 && w < 10 && w + x === 10 && y < 10 && y + z === 10;
    }
    function isFinalFrameSpare(x,y,z)  {
        return x === 18 && y < 10 && y + z === 10;
    }
    function isTurkey(x,y,z)    {
        return x === 10 && y === 10 && z === 10;
    }
    function isDouble(x,y)    {
    return x === 10 && y === 10;    
    }
    function isPostSpareStrike(x,y,z)    {
        return x < 10 && x + y === 10 && z === 10;
    }
    function isPostDoubleSpare(w,x,y,z)    {
        return w === 10 && x === 10 && y < 10 && y + z === 10;
    }
    function isPostStrikeSpare(x,y,z)   {
        return x === 10 && y < 10 && y + z === 10;
    }
    function isPostSpareSpare(w,x,y,z) {
        return w < 10 && w + x === 10 && y < 10 && y + z === 10;
    }
    function isPostDoubleNormal(w,x,y,z)   {
        return w === 10 && x === 10 && y < 10 && y+z <10;
    }
    function isPostStrikeNormal(x,y,z)   {
        return x === 10 && y < 10 && (y+z) < 10;
    }
    function isPostSpareNormal(w,x,y,z)    {
        return w < 10 && w + x === 10 && y < 10 && y + z < 10;
    }
    function isStrike(x)    {
        return x === 10;
    }
    /*function isSpare(x,y)   {
        return x < 10 && y < 10 && x + y === 10;
    }*/
/****************************
 * first effort at making all objects + functions
 * ************************
 *
    function finalTurkey(frames,w,x,y,z)    {
        frames[w] = new Frame(x,y,z);
        frames[w-1].scoreThree += x+y;
        frames[w-2].scoreThree += x;
        frames[w-1].total = frames[w-1].scoreOne + frames[w-1].scoreThree;
        frames[w-2].total = frames[w-2].scoreOne + frames[w-2].scoreThree;
    }
    function finalDouble(frames,w,x,y,z)  {
        frames[w] = new Frame (x,y,z);
        frames[w-1].scoreThree += x+y;
        frames[w-1].total = frames[w-1].scoreOne + frames[w-1].scoreThree;
    }
    function finalStrike(frames,w,x,y,z)  {
        frames[w] = new Frame (x,y,z);
    }
    function finalSpare(frames,w,x,y,z)   {
        frames[w] = new Frame (x,y,z);
    }
    function finalDoubleSpare(frames,w,x,y,z)  {
        frames[w] = new Frame (x,y,z);
        frames[w-1].scoreThree += x+y;
        frames[w-2].scoreThree += x;
        frames[w-1].total = frames[w-1].scoreOne + frames[w-1].scoreThree;
        frames[w-2].total = frames[w-2].scoreOne + frames[w-2].scoreThree;
    }
    function finalStrikeSpare(frames,w,x,y,z)   {
        frames[w] = new Frame (x,y,z);
        frames[w-1].scoreThree = y+z;
        frames[w-1].total = frames[w-1].scoreOne + frames[w-1].scoreThree;
    }
    function finalSpareSpare(frames,w,x,y,z)   {
        frames[w] = new Frame (x,y,z);
        frames[w-1].scoreThree = y;
        frames[w-1].total = frames[w-1].scoreOne + frames[w-1].scoreTwo + frames[w-1].scoreThree;
    }
    function calcOne(frames,w,x,y,z)  {
        frames[w] = new Frame (x,y,z);
        frames[w-1].scoreThree += x;
        frames[w-2].scoreThree += x;
        frames[w-1].total = frames[w-1].scoreOne + frames[w-1].scoreThree;
        frames[w-2].total = frames[w-2].scoreOne + frames[w-2].scoreThree;
    }
    function calcTwo(frames,w,x,y,z)  {
        frames[w] = new Frame (x,y,z);
        frames[w-1].scoreThree += x;
        frames[w-1].total = frames[w-1].scoreOne + frames[w-1].scoreThree;
    }
    function calcThree(frames,w,x,y,z)  {
        frames[w] = new Frame (x,y,z);
        frames[w-1].scoreThree += y+z;
        frames[w-2].scoreThree += z;
        frames[w-1].total = frames[w-1].scoreOne + frames[w-1].scoreThree;
        frames[w-2].total = frames[w-2].scoreOne + frames[w-2].scoreThree;
    }
    function calcFour(frames,w,x,y,z) {
        frames[w] = new Frame(x,y,z);
        frames[w-1].scoreThree += x+y;
        frames[w-1].total = frames[w-1].scoreOne + frames[w-1].scoreThree;
    }
    function calcFive(frames,w,x,y,z) {
        frames[w] = new Frame(x,y,z);
        frames[w-1].scoreThree += x;
        frames[w-1].total = frames[w-1].scoreOne + frames[w-1].scoreTwo + frames[w-1].scoreThree;

    }
    function calcSix(frames,w,x,y,z) {
        frames[w] = new Frame(x,y,z);
    }
    function normal(frames,w,x,y,z)    {
        frames[w] = new Frame(x,y,z);
    }

function calculateTotal(frames, framesObjects, throws){
    let j=0, total = 0;
    for(var i=0;i<frames.length;i++) {

        switch(true)  {
            case isFinalFrameTurkey(j, throws[j-4], throws[j-2], throws[j]):
                finalTurkey(frames,i,throws[j],throws[j+1],throws[j+2]);
                break;
            case isFinalFrameDouble(j, throws[j-2], throws[j]):
                finalDouble(frames,i,throws[j],throws[j+1],throws[j+2]);
                break;
            case isFinalFrameStrike(j, throws[j]):
                finalStrike(frames,i,throws[j],throws[j+1],throws[j+2]);
                break;
            case isFinalDoubleSpare(j, throws[j-4], throws[j-2], throws[j], throws[j+1]):
                finalDoubleSpare(frames,i,throws[j],throws[j+1],throws[j+2]);
                break;
            case isFinalStrikeSpare(j, throws[j-2], throws[j], throws[j+1]):
                finalStrikeSpare(frames,i,throws[j],throws[j+1],throws[j+2]);
                break;
            case isFinalSpareSpare(j, throws[j-2], throws[j-1], throws[j], throws[j+1]):
                finalSpareSpare(frames,i,throws[j],throws[j+1],throws[j+2]);
                break;   
            case isFinalFrameSpare(j, throws[j], throws[j+1]):
                finalSpare(frames,i,throws[j],throws[j+1],throws[j+2]);
                 break;  
            case isTurkey(throws[j-4],throws[j-2],throws[j]):
                calcOne(frames, i, throws[j], 0, 0), j++, j++;
                break;
            case isDouble(throws[j-2],throws[j]):
                calcTwo(frames, i, throws[j], 0, 0), j++, j++;
                break;
            case isPostSpareStrike(throws[j-2], throws[j-1],throws[j]):
                calcTwo(frames, i, throws[j], 0, 0), j++, j++;
                break;
            case isPostDoubleSpare(throws[j-4], throws[j-2], throws[j],throws[j+1]):
                calcThree(frames,i,throws[j],throws[j+1], 0), j++, j++;
                break;
            case isPostStrikeSpare(throws[j-2], throws[j], throws[j+1]):
                calcFour(frames,i,throws[j],throws[j+1], 0), j++, j++;
                break;
            case isPostSpareSpare(throws[j-2],throws[j-1],throws[j],throws[j+1]):
                calcFive(frames,i,throws[j],throws[j+1], 0), j++, j++;
                break;
            case isPostDoubleNormal(throws[j-2],throws[j-1],throws[j],throws[j+1]):
                calcThree(frames,i,throws[j],throws[j+1], 0), j++, j++;
                break;
            case isPostStrikeNormal(throws[j-2], throws[j], throws[j+1]):
                calcFour(frames,i,throws[j],throws[j+1], 0), j++, j++;
                break;
            case isPostSpareNormal(throws[j-2],throws[j-1],throws[j],throws[j+1]):
                calcFive(frames, i, throws[j], throws[j+1], 0), j++, j++;
                break;
            case isStrike(throws[j]):
                calcSix(frames,i,throws[j], 0, 0), j++, j++;
                break;
            default:
                normal(frames, i, throws[j], throws[j+1], 0), j++, j++
        }
        
    }
    for(var k=0;k<frames.length;k++) {
        total += frames[k].total;
    }
    //enumerates objects for debugging
    for(var l=0;l<frames.length;l++) {
        framesObjects[l] = (Object.values(frames[l]));
    }
    return total;
    }
    */

    class Frame {
        constructor(score1, score2, score3) {
        this.scoreOne = score1;
        this.scoreTwo = score2;
        this.scoreThree = score3;
        this.total = this.scoreOne + this.scoreTwo + this.scoreThree;
    }}
    var Game = {
        frame0 = frames[0],
        frame1 = frames[1],
        frame2 = frames[2],
        frame3 = frames[3],
        frame4 = frames[4],
        frame5 = frames[5],
        frame6 = frames[6],
        frame7 = frames[7],
        frame8 = frames[8],
        frame9 = frames[9],
        function() {
            switch(true)  {
                case isFinalFrameTurkey(this.frame9, this.frame7.scoreOne, this.frame8.scoreOne, this.frame9.scoreOne):
                    finalTurkey(this.frame8.scoreOne, this.scoreOne, this.scoreTwo);
                    break;
                case isFinalFrameDouble(j, throws[j-2], throws[j]):
                    finalDouble(frames,i,throws[j],throws[j+1],throws[j+2]);
                    break;
                case isFinalFrameStrike(j, throws[j]):
                    finalStrike(frames,i,throws[j],throws[j+1],throws[j+2]);
                    break;
                case isFinalDoubleSpare(j, throws[j-4], throws[j-2], throws[j], throws[j+1]):
                    finalDoubleSpare(frames,i,throws[j],throws[j+1],throws[j+2]);
                    break;
                case isFinalStrikeSpare(j, throws[j-2], throws[j], throws[j+1]):
                    finalStrikeSpare(frames,i,throws[j],throws[j+1],throws[j+2]);
                    break;
                case isFinalSpareSpare(j, throws[j-2], throws[j-1], throws[j], throws[j+1]):
                    finalSpareSpare(frames,i,throws[j],throws[j+1],throws[j+2]);
                    break;   
                case isFinalFrameSpare(j, throws[j], throws[j+1]):
                    finalSpare(frames,i,throws[j],throws[j+1],throws[j+2]);
                     break;  
                case isTurkey(throws[j-4],throws[j-2],throws[j]):
                    calcOne(frames, i, throws[j], 0, 0), j++, j++;
                    break;
                case isDouble(throws[j-2],throws[j]):
                    calcTwo(frames, i, throws[j], 0, 0), j++, j++;
                    break;
                case isPostSpareStrike(throws[j-2], throws[j-1],throws[j]):
                    calcTwo(frames, i, throws[j], 0, 0), j++, j++;
                    break;
                case isPostDoubleSpare(throws[j-4], throws[j-2], throws[j],throws[j+1]):
                    calcThree(frames,i,throws[j],throws[j+1], 0), j++, j++;
                    break;
                case isPostStrikeSpare(throws[j-2], throws[j], throws[j+1]):
                    calcFour(frames,i,throws[j],throws[j+1], 0), j++, j++;
                    break;
                case isPostSpareSpare(throws[j-2],throws[j-1],throws[j],throws[j+1]):
                    calcFive(frames,i,throws[j],throws[j+1], 0), j++, j++;
                    break;
                case isPostDoubleNormal(throws[j-2],throws[j-1],throws[j],throws[j+1]):
                    calcThree(frames,i,throws[j],throws[j+1], 0), j++, j++;
                    break;
                case isPostStrikeNormal(throws[j-2], throws[j], throws[j+1]):
                    calcFour(frames,i,throws[j],throws[j+1], 0), j++, j++;
                    break;
                case isPostSpareNormal(throws[j-2],throws[j-1],throws[j],throws[j+1]):
                    calcFive(frames, i, throws[j], throws[j+1], 0), j++, j++;
                    break;
                case isStrike(throws[j]):
                    calcSix(frames,i,throws[j], 0, 0), j++, j++;
                    break;
                default:
                    normal(frames, i, throws[j], throws[j+1], 0), j++, j++
            }
        }
    } 

    function isFinalFrameTurkey(w,x,y,z)  {
        return w && x === 10 && y === 10 && z === 10;
    }
    function isFinalFrameStrike(x,y)  {
        return x === 18 && y === 10;
    }
    function isFinalFrameDouble(x,y,z)  {
        return x === 18 && y === 10 && z === 10;
    }
    function isFinalDoubleSpare(v,w,x,y,z)  {
        return v === 18 && w === 10 && x === 10 && y < 10 && y + z === 10;
    }
    function isFinalStrikeSpare(w,x,y,z)  {
        return w === 18 && x === 10 && y < 10 && y + z === 10;
    }
    function isFinalSpareSpare(v,w,x,y,z)  {
        return v === 18 && w < 10 && w + x === 10 && y < 10 && y + z === 10;
    }
    function isFinalFrameSpare(x,y,z)  {
        return x === 18 && y < 10 && y + z === 10;
    }
    function isTurkey(x,y,z)    {
        return x === 10 && y === 10 && z === 10;
    }
    function isDouble(x,y)    {
    return x === 10 && y === 10;    
    }
    function isPostSpareStrike(x,y,z)    {
        return x < 10 && x + y === 10 && z === 10;
    }
    function isPostDoubleSpare(w,x,y,z)    {
        return w === 10 && x === 10 && y < 10 && y + z === 10;
    }
    function isPostStrikeSpare(x,y,z)   {
        return x === 10 && y < 10 && y + z === 10;
    }
    function isPostSpareSpare(w,x,y,z) {
        return w < 10 && w + x === 10 && y < 10 && y + z === 10;
    }
    function isPostDoubleNormal(w,x,y,z)   {
        return w === 10 && x === 10 && y < 10 && y+z <10;
    }
    function isPostStrikeNormal(x,y,z)   {
        return x === 10 && y < 10 && (y+z) < 10;
    }
    function isPostSpareNormal(w,x,y,z)    {
        return w < 10 && w + x === 10 && y < 10 && y + z < 10;
    }
    function isStrike(x)    {
        return x === 10;
    }
    /*function isSpare(x,y)   {
        return x < 10 && y < 10 && x + y === 10;
    }*/

    function finalTurkey(x,y,z)    {
        this.frame7.scoreThree += x+y;
        this.frame8.scoreThree += y+z;
    }
    function finalDouble(frames,w,x,y,z)  {
        frames[w] = new Frame (x,y,z);
        frames[w-1].scoreThree += x+y;
        frames[w-1].total = frames[w-1].scoreOne + frames[w-1].scoreThree;
    }
    function finalStrike(frames,w,x,y,z)  {
        frames[w] = new Frame (x,y,z);
    }
    function finalSpare(frames,w,x,y,z)   {
        frames[w] = new Frame (x,y,z);
    }
    function finalDoubleSpare(frames,w,x,y,z)  {
        frames[w] = new Frame (x,y,z);
        frames[w-1].scoreThree += x+y;
        frames[w-2].scoreThree += x;
        frames[w-1].total = frames[w-1].scoreOne + frames[w-1].scoreThree;
        frames[w-2].total = frames[w-2].scoreOne + frames[w-2].scoreThree;
    }
    function finalStrikeSpare(frames,w,x,y,z)   {
        frames[w] = new Frame (x,y,z);
        frames[w-1].scoreThree = y+z;
        frames[w-1].total = frames[w-1].scoreOne + frames[w-1].scoreThree;
    }
    function finalSpareSpare(frames,w,x,y,z)   {
        frames[w] = new Frame (x,y,z);
        frames[w-1].scoreThree = y;
        frames[w-1].total = frames[w-1].scoreOne + frames[w-1].scoreTwo + frames[w-1].scoreThree;
    }
    function calcOne(frames,w,x,y,z)  {
        frames[w] = new Frame (x,y,z);
        frames[w-1].scoreThree += x;
        frames[w-2].scoreThree += x;
        frames[w-1].total = frames[w-1].scoreOne + frames[w-1].scoreThree;
        frames[w-2].total = frames[w-2].scoreOne + frames[w-2].scoreThree;
    }
    function calcTwo(frames,w,x,y,z)  {
        frames[w] = new Frame (x,y,z);
        frames[w-1].scoreThree += x;
        frames[w-1].total = frames[w-1].scoreOne + frames[w-1].scoreThree;
    }
    function calcThree(frames,w,x,y,z)  {
        frames[w] = new Frame (x,y,z);
        frames[w-1].scoreThree += y+z;
        frames[w-2].scoreThree += z;
        frames[w-1].total = frames[w-1].scoreOne + frames[w-1].scoreThree;
        frames[w-2].total = frames[w-2].scoreOne + frames[w-2].scoreThree;
    }
    function calcFour(frames,w,x,y,z) {
        frames[w] = new Frame(x,y,z);
        frames[w-1].scoreThree += x+y;
        frames[w-1].total = frames[w-1].scoreOne + frames[w-1].scoreThree;
    }
    function calcFive(frames,w,x,y,z) {
        frames[w] = new Frame(x,y,z);
        frames[w-1].scoreThree += x;
        frames[w-1].total = frames[w-1].scoreOne + frames[w-1].scoreTwo + frames[w-1].scoreThree;
    }
    function calcSix(frames,w,x,y,z) {
        frames[w] = new Frame(x,y,z);
    }
    function normal(frames,w,x,y,z)    {
        frames[w] = new Frame(x,y,z);
    }

function calculateTotal(frames, framesObjects, throws){
    let j=0, total = 0;
    for(var i=0;i<frames.length;i++) {
        throws[j] = prompt("What is the first roll?");
        switch(true)  {
            case throws[j] < 10:
                frames[i] = new Frame(throws[j],0,0),
                throws[j+1] = prompt("What is the second roll?"),
                frames[i].scoreTwo = throws[j+1],
                Game.frame0 = frames[i];
                break;
            default:
                frames[i] = new Frame(throws[j],0,0),
                Game.frame0 = frames[i];
        }
        
    }
    for(var k=0;k<frames.length;k++) {
        total += frames[k].total;
    }
    //enumerates objects for debugging
    for(var l=0;l<frames.length;l++) {
        framesObjects[l] = (Object.values(frames[l]));
    }
    return total;
    }



//module.exports.calculateScore = calculateScore;
module.exports.calculateTotal = calculateTotal;

