// SUCCESS RESPONSE
exports.successResponse = (res, data = {}, message = "Success") => {
    return res.status(200).json({
        status: "success",
        message,
        data
    });
};

// ERROR RESPONSE
exports.errorResponse = (res, statusCode = 500, message = "Something went wrong") => {
    return res.status(statusCode).json({
        status: "error",
        message
    });
};
