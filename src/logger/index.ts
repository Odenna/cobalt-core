import winston from 'winston';

class Console {
    private level: number;

    constructor() {
        this.level = 0;
    }

    public log(str: string): void {
        console.log(str)
    }

    public info(str: string): void {
        console.info(str);
    }

    public warn(str: string): void {
        console.warn(str);
    }

    public error(str: string): void {
        console.error(str);
    }
}

let logger: Console = new Console();

export default logger;

/*
Old logger file. Must be converted into this one.

'use strict';
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const consoleFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});

const loggerProd = createLogger({
    level: 'info',
    format: combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.errors({ stack: true }),
        format.splat(),
        format.json()
    ),
    transports: [
        new transports.File({ filename: 'logs/errors.log', level: 'error' }),
        new transports.File({ filename: 'logs/all.log' })
    ]
});

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
    transports: [
        new transports.File({ filename: 'logs/errors.log', level: 'error' }),
        new transports.File({ filename: 'logs/all.log' }),
        new transports.Console({
            format: format.combine(
                label({ label: (process.env.COBALT_NAME || 'COBALT-CORE') }),
                timestamp(),
                format.colorize(),
                consoleFormat
            )
        })
    ]
});

module.exports = function() {
    return (process.env.NODE_ENV === 'production') ? loggerProd : loggerDev;
};
*/