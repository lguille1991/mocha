let assert = require('assert');

describe ('Mathematical Operations - Test Suite', function() {

    it ('Add two numbers', function() {
        let a = 10;
        let b = 10;
        let c = a + b;

        assert.equal(c, 20);
    });

    it ('Substrat two numbers', function() {
        let a = 10;
        let b = 10;
        let c = a - b;

        assert.equal(c, 0);
    });

    it ('Multiply two numbers', function() {
        let a = 10;
        let b = 10;
        let c = a * b;

        assert.equal(c, 100);
    });

    it ('Divide two numbers', function() {
        let a = 10;
        let b = 10;
        let c = a / b;

        assert.equal(c, 1);
    });

    it ('This is a test for Pending Test Feature');

});