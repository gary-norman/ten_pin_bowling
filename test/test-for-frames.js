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
    
})
