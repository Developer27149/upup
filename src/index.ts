#!/usr/bin/env node
const clear = require('clear')
const figlet = require('figlet')
const path = require('path')
const { program } = require('commander')
const { green } = require('kleur')

// ╭──────────────────────────────────────────────────────────╮
// │ clear screen and show logo                               │
// ╰──────────────────────────────────────────────────────────╯
clear()
console.log(green(
  figlet.textSync('UpUp - cli', { horizontalLayout: true })
))


// config cli with options
program
  .name('upup')
  .version('0.0.1')
  .description('通过命令行将音乐上传到网易云盘')
  .option('-u, --user', 'username')
  .option('-p, --password', 'password')
  .parse(process.argv)


