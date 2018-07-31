'use strict';

const test = require('tape');
const {
    readUIntBE,
    readUIntLE,
} = require('..');

test('readUIntBE: no args', (t) => {
    t.throws(readUIntBE, /buf should be a buffer!/, 'should throw when no args');
    t.end();
});

test('readUIntLE: no args', (t) => {
    t.throws(readUIntLE, /buf should be a buffer!/, 'should throw when no args');
    t.end();
});

test('readUIntBE', (t) => {
    const buf = Buffer.from([0xff, 0xfe, 0xff, 0xfd, 0xfb, 0xfa, 0xf0, 0xf1]);
    
    const result = readUIntBE(buf, 0);
    const expected = 'fffefffdfbfaf0f1';
    
    t.deepEqual(result, expected, 'shoudl equal');
    t.end();
});

test('readUIntLE', (t) => {
    const buf = Buffer.from([0xff, 0xfe, 0xff, 0xfd, 0xfb, 0xfa, 0xf0, 0xf1]);
    
    const result = readUIntLE(buf, 0);
    const expected = 'f1f0fafbfdfffeff';
    
    t.deepEqual(result, expected, 'shoudl equal');
    t.end();
});

