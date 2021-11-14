const { getAction } = require('./args.js');
const { cipher } = require('./ciphers.js');

const stream = require('stream');
const coder = new stream.Transform({objectMode: true});


coder._transform = function (chunk, encoding, done) {
    try {
        done(null, cryptoSystem(chunk.toString(), getAction()));
    } catch (e) {
        done(e);
    }
};

module.exports = {coder};