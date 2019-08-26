'use strict'

let throws = Array(21).fill(0);
let frames = Array(10).fill(0);

function calculateScore(){
    var throw1 = 5;
    var throw2 = 4;
    return throw1 + throw2;
}
const frame = [];
frame.length = 21;

/*function calculateScore(){
    var throw1 = 0;
    var throw2 = 0;
    return throw1 + throw2;

}*/


//gives the sum of the throws array
const add = (a, b) => a + b;
const calculateTotal = throws.reduce(add);

//prints Strike!, Double!, Turkey! or SPare!
/*switch(frame) {
    case throw1 = 10:
        text = "Strike!";
        break;
    case throw1<10&&calculateScore==10:
        text = "Spare!";
        break;
    default:
        text = calculateScore;
}*/


module.exports.calculateScore = calculateScore;
module.exports.throws = throws;
module.exports.frames = frames;
module.exports.calculateTotal = calculateTotal;

