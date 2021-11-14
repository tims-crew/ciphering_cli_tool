const { stdin, stdout, stderr, exit } = process;

function cipher(text, action) {
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const regex = /[CR](1|0)|A/gm
    const actionOpened = action.match(regex);

    let result = '';
    for (let i = 0; i <= actionOpened.length; i++) {
        if (actionOpened[i] === 'R1') {
            result = rot13(result, actionOpened[i])
        } else if (actionOpened[i] === 'R0') {
            result = rot13(result, actionOpened[i])
        } else if (actionOpened[i] === 'C1') {
            result = caesar(text, actionOpened[i])
        } else if (actionOpened[i] === 'C0') {
            result = caesar(result, actionOpened[i])
        } else if (actionOpened[i] === 'A') {
            result = atbash(result)
        }        
    }

    function rot13(message, mode) {
        var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
        if (mode === 'R1') {
            console.log('encoding')
            return message.replace(/[a-z]/gi, (c) => b[alphabet.indexOf(c)]);
        } else if (mode === 'R0') {
            console.log('decoding')
            return message.replace(/[a-z]/gi, (c) => alphabet[b.indexOf(c)]);
        } else {
            stderr.write('Invalid property!! In ROT18');
            exit(1);
        }
    }

    function atbash(message) {
        var b = "zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA";
        return message.replace(/[a-z]/gi, (c) => b[alphabet.indexOf(c)]);        
    }

    function caesar(message, mode) {
        var b = "xyzabcdefghijklmnopqrstuvwXYZABCDEFGHIJKLMNOPQRSTUVW";
        if (mode === 'C1') {
            console.log('encoding')
            return message.replace(/[a-z]/gi, (c) => b[alphabet.indexOf(c)]);
        } else if (mode === 'C0') {
            console.log('decoding')
            return message.replace(/[a-z]/gi, (c) => alphabet[b.indexOf(c)]);
        } else {
            stdout.err('Invalid property!! CAESAR');
            exit(1);
        }
    }
    return result;
}

console.log(cipher('Qefp fp pbzobq. Jbppxdb xylrq "_" pvjyli!', 'C1-R0-A-R0-C1'))
module.exports = {cipher}