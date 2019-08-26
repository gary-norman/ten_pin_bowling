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


describe('Bowling game tests', function () {
    it('Test for less than 10', function() {
        assert(bowling.calculateScore() , 10)
    })
    it('Has 21 throws', function() {
        assert.strictEqual(bowling.throws.length, 21);
    })
    it('has 10 frames', function() {
        assert.strictEqual(bowling.frames.length, 10);
    })
    it('test for zero total', function() {
        assert.strictEqual(bowling.calculateTotal, 0)
    
    })
})
