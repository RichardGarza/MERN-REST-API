
// This replaces the standard express.js error handler
// Changes error repsonse from HTML to json
// Also only returns stack when in development mode, in production stack will be null
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
    
    res.status(statusCode)

    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
}

module.exports = {
    errorHandler
}
