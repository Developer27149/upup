#!/usr/bin/env node
"use strict";
var clear = require('clear');
var figlet = require('figlet');
var path = require('path');
var program = require('commander').program;
var green = require('kleur').green;
// ╭──────────────────────────────────────────────────────────╮
// │ clear screen and show logo                               │
// ╰──────────────────────────────────────────────────────────╯
clear();
console.log(green(figlet.textSync('UpUp - cli', { horizontalLayout: true })));
// config cli with options
program
    .name('upup')
    .version('0.0.1')
    .description('通过命令行将音乐上传到网易云盘')
    .option('-u, --user', 'username')
    .option('-p, --password', 'password')
    .parse(process.argv);
