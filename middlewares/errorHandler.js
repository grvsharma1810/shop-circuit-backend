const errorHandler = async (err, req, res, next) => {
    if (err.customMessage) {
        res.status(500).json({ success: false, message: err.customMessage, errorMessage: err.message })
    } else {
        res.status(500).json({ success: false, message: "internal server error", errorMessage: err.message })
    }

}
module.exports = errorHandler;