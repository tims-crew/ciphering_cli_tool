const fs = require('fs')
const { stdin, stdout, stderr, exit } = require('process');
const { pipeline } = require('stream');

function transformator(inputFile, outputFile) {
    let source;
    if (inputFile) {
        source = fs.createReadStream(inputFile)
    } else {
        source = stdin
    }

    let target 
    if (outputFile) {
        target = fs.createWriteStream(outputFile, {flags: 'a'})
    } else {
        target = stdout
    }

    pipeline(
        source,
        cipher,
        target,
        (err) => {
            stderr.write(err.message)
            exit(1)
        }
    )
}

module.exports = {transformator}