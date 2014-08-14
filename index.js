#!/usr/bin/env node

'use strict';

var parser = require('nomnom'),
    appPath = process.cwd(),
    getLogger = require('./logger'),
    Messages = require('./messages'),
    ServerOperations = require('./serverOperations'),
    path = require('path');

parser.script('rhapsody-cli');

var Logger = getLogger();

var msg = new Messages(Logger),
    server = new ServerOperations(appPath);

/**
 * Scaffolds a new project
 */
var newCommand = require('./commands/new');
parser.command('new').callback(newCommand(msg)).help(newCommand.help);
parser.command('n').callback(newCommand(msg)).help(newCommand.help);


/**
 * Scaffolds a new controller or model
 */
var generateCommand = require('./commands/generate');
parser.command('generate').callback(generateCommand(msg)).help(generateCommand.help);
parser.command('g').callback(generateCommand(msg)).help(generateCommand.help);


/**
 * Builds the project without run the server
 */
var buildCommand = require('./commands/build');
parser.command('build').callback(buildCommand(msg, server)).help(buildCommand.help);


/**
 * Run the server, optionally not building it before
 */
var runCommand = require('./commands/run');
parser.command('run')
.options(runCommand.options).callback(runCommand(msg, server)).help(runCommand.help);

parser.parse();
