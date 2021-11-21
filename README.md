# Ciphering CLI Tool
RS School task-1 solution

Setup the environment

```bash
npm install

npm init

```

Clone this repository or click green button and press the "Download ZIP" button
```bash
https://github.com/tims-crew/ciphering_cli_tool.git
```

To use CLI tool you must pass comand to terminal:

```bash
node my_ciphering_cli -c `--config` -i `--input` -o `--output`
```
CLI tool should accept 3 options (short alias and full name):

-c, --config: config for ciphers Config is a string with pattern {XY(-)}n, where:
X is a cipher mark:
C is for Caesar cipher (with shift 1)
A is for Atbash cipher
R is for ROT-8 cipher
Y is flag of encoding or decoding (mandatory for Caesar cipher and ROT-8 cipher and should not be passed Atbash cipher)
1 is for encoding
0 is for decoding
-i, --input: a path to input file
-o, --output: a path to output file

App run examples

```bash
$ node my_ciphering_cli -c "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"
```
```bash
$ node my_ciphering_cli -c "C1-C0-A-R1-R0-A-R0-R0-C1-A" -i "./input.txt" -o "./output.txt"
```
```bash
$ node my_ciphering_cli -c "C1-R1-C0-C0-A-R0-R1-R1-A-C1" -i "./input.txt" -o "./output.txt"
```
