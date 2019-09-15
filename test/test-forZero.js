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

describe('Check zero score is zero.', function () {
    it('Test for zero value', function() {
        assert(bowling.calculateScore(throws) ==  0);
    })

    it('Check 2 throws equal 9', function() {
        throws[0] = 5
        throws[1] = 4
        assert(bowling.calculateScore(throws) == 9);
    })

    it('Check 2 frame spare', function() {
        throws[0] = 5
        throws[1] = 5
        throws[2] = 4
        throws[3] = 5

        assert(bowling.calculateScore(throws) == 23);
    })

    it('check 2 frame strike', function()   {
        throws[0] = 10
        throws[1] = 0
        throws[2] = 4
        throws[3] = 5

        assert(bowling.calculateScore(throws) == 28);
    })

    it('check 3 frame strike + spare', function()   {
        throws[0] = 10
        throws[1] = 0
        throws[2] = 5
        throws[3] = 5
        throws[4] = 4
        throws[5] = 5

        assert(bowling.calculateScore(throws) == 48);
    })
})
