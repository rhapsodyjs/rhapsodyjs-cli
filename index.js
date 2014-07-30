#!/usr/bin/env node

'use strict';

var parser = require('nomnom'),
    appPath = process.cwd(),
    getLogger = require('./logger'),
    Messages = require('./messages'),
    ServerOperations = require('./serverOperations'),
    path = require('path');

parser.script('rhapsody');

var Logger = getLogger();

var msg = new Messages(Logger),
    server = new ServerOperations(appPath);

/**
 * Scaffolds a new project
 */
var newCommand = require('./commands/new');
parser.command('new').callback(newCommand(msg)).help('Create a new app');
parser.command('n').callback(newCommand(msg)).help('Create a new app');


/**
 * Scaffolds a new controller or model
 */
var generateCommand = require('./commands/generate');
parser.command('generate').callback(generateCommand(msg)).help('Generate a new controller or model');
parser.command('g').callback(generateCommand(msg)).help('Generate a new controller or model');


/**
 * Builds the project without run the server
 */
var buildCommand = require('./commands/build');
parser.command('build').callback(buildCommand(msg, server)).help('Build the server without run it');


/**
 * Run the server, optionally not building it before
 */
var runCommand = require('./commands/run');
parser.command('run')
.option('no-build', {
  abbr: 'n',
  full: 'no-build',
  flag: true,
  help: 'Don\'t build again, just run'
}).callback(runCommand(msg, server)).help('Build the server then run it. If -n or --no-build is passed, run the server without build it');

parser.parse();
