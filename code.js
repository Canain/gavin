/// <reference path="typings/main.d.ts" />
'use strict';

const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

const code = [];

for (let i = 0; i < charset.length; i++) {
	let gavin = 'g';
	for (let j = 0; j < i + 1; j++) {
		gavin += 'a';
	} 
	gavin += 'vin';
	code[charset.charCodeAt(i)] = gavin;
}

module.exports = code;