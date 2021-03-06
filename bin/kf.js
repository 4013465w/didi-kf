#!/usr/bin/env node

var path = require('path');
var curPath = process.cwd();
var colors = require('colors');
var kf = require('../src/index.js');
var log = require('../src/log.js');

var yas = require('yargs')
    .usage('Usage: kf [options]')
    .example('kf init pageName -t 客服中心','创建文件')
    .option('title', {
      alias : 't',
      demand: false,
      default: '客服中心',
      describe: 'html 文件标题',
      type: 'string'
    })
    .help('h')
    .alias('h', 'help')
    .command('init', '初始化工作文件',function (yargs) {
       var argv = yargs
       .reset()
       .usage('Usage: kf init [options]')
       .example('kf init pageName -t 客服中心','创建文件')
       .option('t', {
          alias : 'title',
          demand: false,
          default: '客服中心',
          describe: 'html 文件标题',
          type: 'string'
        })
        .option('p', {
          alias : 'prefix',
          demand: false,
          default: '',
          describe: '文件前缀',
          type: 'string'
        })
       .help('h')
       .alias('h', 'help')
       .argv;
      if (!argv._[1]) {
        log.error('请输入文件名哦！');
      }
      kf.init(argv._[1], null, false, {
        title:argv.title
      },argv.p);
      kf.checkFiles();
      kf.copyFile();
    })
    .argv;
