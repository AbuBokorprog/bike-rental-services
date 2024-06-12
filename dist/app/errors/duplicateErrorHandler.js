"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.duplicateErrorHandler = void 0;
const duplicateErrorHandler = (err) => {
    const match = err.message.match(/"([^"]*)"/);
    const extractedMessage = match && match[1];
    const errorMessages = [
        {
            path: '',
            message: `${extractedMessage} is already exist.`,
        },
    ];
    const statusCode = 400;
    return {
        statusCode,
        message: 'Invalid Id Error',
        errorMessages,
    };
};
exports.duplicateErrorHandler = duplicateErrorHandler;