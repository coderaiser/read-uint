'use strict';

const addZero = (a) => {
    if (a.length === 1)
        return `0${a}`;
    
    return a;
};

const rmLeadingZeros = (a) => {
    let i = 0;
    
    while(a[i] === '0')
        ++i;
    
    return a.slice(i);
};

module.exports.readUIntBE = (buf, offset, length = 8) => {
    check(buf);
    
    const data = [];
    let i = -1;
    
    while (++i < length) {
        const current = buf
            .readUInt8(offset + i)
            .toString(16);
        
        if (!i) {
            data.push(current);
            continue;
        }
        
        data.push(addZero(current));
    }
    
    const str = data.join('');
    const result = rmLeadingZeros(str);
    return `0x${result}`;
};

module.exports.readUIntLE = (buf, offset, length = 8) => {
    check(buf);
    
    const data = [];
    let i = length;
    
    while (--i > -1) {
        const current = buf
            .readUInt8(offset + i)
            .toString(16);
        
        if (i === length - 1) {
            data.push(current);
            continue;
        }
        
        data.push(addZero(current));
    }
    
    const str = data.join('');
    const result = rmLeadingZeros(str);
    
    return `0x${result}`;
};

function check(buf) {
    if (!(buf instanceof Buffer))
        throw Error('buf should be a buffer!');
}

