const errorHandlerMiddleware = async (err, req, res, next) => {
    res.status(500).json({ msg: "Something went wrong, try again" })
}

module.exports = errorHandlerMiddleware