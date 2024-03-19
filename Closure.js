function createLogger(nameSpace) {
    function logger(mess) {
        console.log(`[${nameSpace}]: ${mess}`);
    }
    return logger;
}
const logger1 = createLogger('Error');
logger1('status 400')
logger1('status 404')
const logger2 = createLogger('Info');
logger2('Get user Success')
logger2('Get info Success')
