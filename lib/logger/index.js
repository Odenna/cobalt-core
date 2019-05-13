'use strict';
const { createLogger, format, transports } = require('winston');

module.exports = function() {
    return (process.env.NODE_ENV === 'production') ? loggerProd : loggerDev;
}

/**
 * @function
 * @name loggerProd
 * @description A winston logger configuration for the
 * production use
 */
const loggerProd = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.errors({ stack: true }),
        format.splat(),
        format.json()
    ),
    defaultMeta: { service: 'COBALT-CORE' },
    transports: [
        new transports.File({ filename: 'logs/errors.log', level: 'error' }),
        new transports.File({ filename: 'logs/all.log' })
    ]
});

/**
 * @function
 * @name loggerDev
 * @description A winston logger configuration for the
 * developement use
 */
const loggerDev = createLogger({
    level: 'debug',
    format: format.combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.errors({ stack: true }),
        format.splat(),
        format.json()
    ),
    defaultMeta: { service: 'COBALT-CORE' },
    transports: [
        new transports.File({ filename: 'logs/errors.log', level: 'error' }),
        new transports.File({ filename: 'logs/all.log' }),
        new transports.Console({
            format: format.combine(
              format.colorize(),
              format.simple()
            )
        })
    ]
});