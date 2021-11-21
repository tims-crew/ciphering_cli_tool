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
node my_ciphering_cli -c '--config' -i '--input' -o '--output'
```
CLI tool should accept 3 options (short alias and full name):

1. -c, --config: config for ciphers Config is a string with pattern <code>{XY(-)}n</code>, where:
<ul><code>X</code> is a cipher mark:
  <ul>
    <li><code>C</code> is for Caesar cipher (with shift 1)<li>
    <li><code>A</code> is for Atbash cipher<li>
    <li><code>R</code> is for ROT-8 cipher<li>
   </ul>
</ul>

<ul><code>Y</code> is flag of encoding or decoding (mandatory for Caesar cipher and ROT-8 cipher and should not be passed Atbash cipher)
  <ul>
    <li><code>1</code> is for encoding</li>
    <li><code>0</code> is for decoding</li>
  </ul>
</ul>
2. -i, --input: a path to input file </br>
3. -o, --output: a path to output file </br>

App run examples </br>

```bash
$ node my_ciphering_cli -c "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"
```
```bash
$ node my_ciphering_cli -c "C1-C0-A-R1-R0-A-R0-R0-C1-A" -i "./input.txt" -o "./output.txt"
```
```bash
$ node my_ciphering_cli -c "C1-R1-C0-C0-A-R0-R1-R1-A-C1" -i "./input.txt" -o "./output.txt"
```
