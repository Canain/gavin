/// <reference path="typings/main.d.ts" />
'use strict';

const code = [];
for (let i = 0; i < 256; i++) {
	let gavin = 'g';
	for (let j = 0; j < i + 1; j++) {
		gavin += 'a';
	} 
	gavin += 'vin';
	code[i] = gavin;
}

module.exports = code;