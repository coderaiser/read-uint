'use strict';

const test = require('tape');
const {
    readUIntBE,
    readUIntLE,
} = require('..');

test('readUIntBE: no args', (t) => {
    t.throws(readUIntBE, /buf should be a buffer or an array!/, 'should throw when no args');
    t.end();
});

test('readUIntLE: no args', (t) => {
    t.throws(readUIntLE, /buf should be a buffer or an array!/, 'should throw when no args');
    t.end();
});

test('readUIntBE', (t) => {
    const buf = Buffer.from([0xff, 0xfe, 0xff, 0xfd, 0xfb, 0xfa, 0xf0, 0xf1]);
    
    const result = readUIntBE(buf, 0);
    const expected = '0xfffefffdfbfaf0f1';
    
    t.deepEqual(result, expected, 'shoudl equal');
    t.end();
});

test('readUIntLE', (t) => {
    const buf = Buffer.from([0xff, 0xfe, 0xff, 0xfd, 0xfb, 0xfa, 0xf0, 0xf1]);
    
    const result = readUIntLE(buf, 0);
    const expected = '0xf1f0fafbfdfffeff';
    
    t.deepEqual(result, expected, 'shoudl equal');
    t.end();
});

test('readUIntBE: less then 0x0f', (t) => {
    const buf = Buffer.from([0x1, 0x2, 0x3, 0x4]);
    
    const result = readUIntBE(buf, 0, 4);
    const expected = '0x1020304';
    
    t.deepEqual(result, expected, 'shoudl equal');
    t.end();
});

test('readUIntLE: less then 0x0f', (t) => {
    const buf = Buffer.from([0x1, 0x2, 0x3, 0x4]);
    
    const result = readUIntLE(buf, 0, 4);
    const expected = '0x4030201';
    
    t.deepEqual(result, expected, 'shoudl equal');
    t.end();
});

test('readUIntLE: leading zeros', (t) => {
    const buf = Buffer.from([0x0, 0x0, 0x3, 0x0]);
    
    const result = readUIntLE(buf, 0, 4);
    const expected = '0x30000';
    
    t.deepEqual(result, expected, 'shoudl equal');
    t.end();
});

test('readUIntBE: leading zeros', (t) => {
    const buf = Buffer.from([0x0, 0x0, 0x3, 0x0]);
    
    const result = readUIntBE(buf, 0, 4);
    const expected = '0x300';
    
    t.deepEqual(result, expected, 'shoudl equal');
    t.end();
});

test('readUIntLE: all zeros', (t) => {
    const buf = Buffer.from([0x0, 0x0, 0x0, 0x0]);
    
    const result = readUIntLE(buf, 0, 4);
    const expected = '0x0';
    
    t.deepEqual(result, expected, 'shoudl equal');
    t.end();
});

test('readUIntBE: all zeros', (t) => {
    const buf = Buffer.from([0x0, 0x0, 0x0, 0x0]);
    
    const result = readUIntBE(buf, 0, 4);
    const expected = '0x0';
    
    t.deepEqual(result, expected, 'shoudl equal');
    t.end();
});

test('readUIntBE: array', (t) => {
    const buf = [0xff, 0xfe, 0xff, 0xfd, 0xfb, 0xfa, 0xf0, 0xf1];
    
    const result = readUIntBE(buf, 0);
    const expected = '0xfffefffdfbfaf0f1';
    
    t.deepEqual(result, expected, 'shoudl equal');
    t.end();
});

test('readUIntLE: array', (t) => {
    const buf = [0xff, 0xfe, 0xff, 0xfd, 0xfb, 0xfa, 0xf0, 0xf1];
    
    const result = readUIntLE(buf, 0);
    const expected = '0xf1f0fafbfdfffeff';
    
    t.deepEqual(result, expected, 'shoudl equal');
    t.end();
});

