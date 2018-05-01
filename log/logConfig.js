'use strict'
const logger = require('log4js');

logger.configure({
    appenders: { appLog: { type: 'file', filename: 'logs/nodeData.log', out: {type: 'stdout',layout:{
      type: 'pattern',
      pattern: '%d %p %c %X %m%n'
    }} } },
    categories: { default: { appenders: ['appLog'], level: 'trace', pattern: "[%r][%.1p] %c - %m" } }
  });
  
  module.exports = logger;