#!/usr/bin/env node
/// <reference path="typings/main.d.ts" />
'use strict';

const fs = require('fs');
const UglifyJS = require("uglify-js");
const lzmajs = require('lzma-purejs');

const code = require('./code');

const file = process.argv[2];

const script = fs.readFileSync(file, 'utf8');

const data = new Buffer(script, 'utf8');

const compressed = lzmajs.compressFile(data);

const base64 = new Buffer(compressed).toString('base64');

let out = '';
for (let i = 0; i < base64.length; i++) {
	out += code[base64.charCodeAt(i)];
}

fs.writeFileSync(file.substring(0, file.lastIndexOf('.js')) + '.gavin', out);