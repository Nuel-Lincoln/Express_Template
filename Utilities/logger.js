// logger.js
const winston = require('winston');
const { combine, timestamp, printf } = winston.format;
const moment = require('moment');  // Import moment to handle date formatting

// Get the current date in the desired format (e.g., YYYY-MM-DD)
const date = moment().format('YYYY-MM-DD');

// Define a custom log format
const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level.toUpperCase()}]: \n${message}\n`;
});

// Create a logger instance
const logger = winston.createLogger({
  level: 'info',  // Set the default log level
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    logFormat
  ),
  transports: [
    // Log to a file
    new winston.transports.File({ filename: `logs/Express-logs-for-${date}.log` }),
    // Log to the console
    new winston.transports.Console()
  ]
});

module.exports = logger;
