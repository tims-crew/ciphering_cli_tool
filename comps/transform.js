const fs = require('fs')
const { Transform, pipeline } = require('stream')
const { stdin, stdout, argv } = require('process')

class ReplaceText extends Transform {
    constructor(char) {
        super()
        this.replaceChar = char
    }

    _transform(chunk, encoding, callback) {
        let rot13_crp = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm",
            atbash_crp = "ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba",
            caesar_crp = "XYZABCDEFGHIJKLMNOPQRSTUVWxyzabcdefghijklmnopqrstuvw"

        if (this.replaceChar === 'c') this.replaceChar = caesar_crp;
        if (this.replaceChar === 'A') this.replaceChar = atbash_crp;
        if (this.replaceChar === 'R') this.replaceChar = rot13_crp;

        const transformChar = chunk.toString().replace(/[A-Z]/gi, c => this.replaceChar["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".indexOf(c)])
        this.push(transformChar)
        callback()
    }

    _flush(callback) {
        this.push('more data being passed through...')
        callback()
    }
}

const config = new ReplaceText(argv[3])

const myWriteStream = fs.createWriteStream(__dirname + '/output.txt')

pipeline(
    stdin,
    config,
    myWriteStream,
    (err) => {
        stdout.err("Error occured: " + err)
    }
)