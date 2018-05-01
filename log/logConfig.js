'use strict'
const logger = require('log4js');

logger.configure({
    appenders: { appLog: { type: 'file', filename: 'logs/nodeData.log',pattern: "debug/yyyyMMddhh.txt" } },
    categories: { default: { appenders: ['appLog'], level: 'trace', pattern: "[%r][%.1p] %c - %m" } }
  });
  
module.exports = logger;