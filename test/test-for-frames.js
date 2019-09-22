'use strict'

let bowling = require('../src/bowlingrules/bowling.js')
/*let bowling = {
    throw1: 0,
    throw2: 0,
    calculateScore: function (){
        return this.throw1 + this.throw2;
    }
    
    
    }*/
let assert = require('assert');

/**
 * So Test Driven Development is the concept of writing a test first
 * and then writing just enough code to satisfy the test.
 *
 * I set the test up for you and then you can fullfill the test.
 * I haven't added any code yet so you can start with creating the function and then make sure the test pass.
 *
 * run test with 'npm test'
 */

let throws = Array(21).fill(0);
let frames = Array(10).fill(0);

describe('Check total frames score.', function () {
    it('Test for zero value', function() {
        assert(bowling.calculateTotal(frames) ==  0, "The actual value is " + bowling.calculateTotal(frames) + " array = "+frames);
    })

    it('Check 2 throws equal 9', function() {
        throws[0] = 5
        throws[1] = 4
        assert(bowling.calculateTotal(frames) == 9, "The actual value is " + bowling.calculateTotal(frames) + " array = "+frames);
    })

    it('Check 2 frame spare', function() {
        throws[0] = 5
        throws[1] = 5
        throws[2] = 4
        throws[3] = 5

        assert(bowling.calculateTotal(frames) == 23, "The actual value is " + bowling.calculateTotal(frames) + " array = "+frames);
    })

    it('check 2 frame strike', function()   {
        throws[0] = 10
        throws[1] = 0
        throws[2] = 4
        throws[3] = 5

        assert(bowling.calculateTotal(frames) == 28, "The actual value is " + bowling.calculateTotal(frames) + " array = "+frames);
    })

    it('check 3 frame strike + spare', function()   {
        throws[0] = 10
        throws[1] = 0
        throws[2] = 5
        throws[3] = 5
        throws[4] = 4
        throws[5] = 5

        assert(bowling.calculateTotal(frames) == 43, "The actual value is " + bowling.calculateTotal(frames) + " array = "+frames);
    })

    it('check perfect game', function()   {
        throws[0] = 10
        throws[1] = 0

        throws[2] = 10
        throws[3] = 0

        throws[4] = 10
        throws[5] = 0

        throws[6] = 10
        throws[7] = 0

        throws[8] = 10
        throws[9] = 0

        throws[10] = 10
        throws[11] = 0

        throws[12] = 10
        throws[13] = 0

        throws[14] = 10
        throws[15] = 0

        throws[16] = 10
        throws[17] = 0

        throws[18] = 10
        throws[19] = 10

        throws[20] = 10

        assert(bowling.calculateTotal(frames) == 300, "The actual value is " + bowling.calculateTotal(frames) + " array = "+frames);
    })

    it('check 9 strikes and a spare', function()   {
        throws[0] = 10
        throws[1] = 0

        throws[2] = 10
        throws[3] = 0

        throws[4] = 10
        throws[5] = 0

        throws[6] = 10
        throws[7] = 0

        throws[8] = 10
        throws[9] = 0

        throws[10] = 10
        throws[11] = 0

        throws[12] = 10
        throws[13] = 0

        throws[14] = 10
        throws[15] = 0

        throws[16] = 10
        throws[17] = 0

        throws[18] = 5
        throws[19] = 5

        throws[20] = 5

        assert(bowling.calculateTotal(frames) == 270, "The actual value is " + bowling.calculateTotal(frames) + " array = "+frames);
    })

    it('check 10 spares', function()   {
        throws[0] = 5
        throws[1] = 5

        throws[2] = 5
        throws[3] = 5

        throws[4] = 5
        throws[5] = 5

        throws[6] = 5
        throws[7] = 5

        throws[8] = 5
        throws[9] = 5

        throws[10] = 5
        throws[11] = 5

        throws[12] = 5
        throws[13] = 5

        throws[14] = 5
        throws[15] = 5

        throws[16] = 5
        throws[17] = 5

        throws[18] = 5
        throws[19] = 5

        throws[20] = 5

        assert(bowling.calculateTotal(frames) == 150, "The actual value is " + bowling.calculateTotal(frames) + " array = "+frames);
    })

    it('check every frame is 9', function()   {
        throws[0] = 4
        throws[1] = 5

        throws[2] = 4
        throws[3] = 5

        throws[4] = 4
        throws[5] = 5

        throws[6] = 4
        throws[7] = 5

        throws[8] = 4
        throws[9] = 5

        throws[10] = 4
        throws[11] = 5

        throws[12] = 4
        throws[13] = 5

        throws[14] = 4
        throws[15] = 5

        throws[16] = 4
        throws[17] = 5

        throws[18] = 4
        throws[19] = 5

        throws[20] = 0

        assert(bowling.calculateTotal(frames) == 90, "The actual value is " + bowling.calculateTotal(frames) + " array = "+frames);
    })
})
