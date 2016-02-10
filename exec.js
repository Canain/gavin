#!/usr/bin/env node
/// <reference path="typings/main.d.ts" />
'use strict';

const fs = require('fs');
const lzmajs = require('lzma-purejs');

const file = process.argv[2];

const code = require('./code');

let encoded = fs.readFileSync(file, 'utf8');

code.forEach((replace, i) => {
	encoded = encoded.split(replace).join(String.fromCharCode(i));
});

const decoded = new Buffer(encoded, 'base64');

const decompressed = lzmajs.decompressFile(decoded);

const script = new Buffer(decompressed).toString('utf8');

eval(script);