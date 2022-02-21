const CustomAPIError = require('./custom-error')
const {StatusCodes} = require('http-status-codes')
class UnauthorizedRequest extends CustomAPIError {
  constructor(message, statusCode) {
    super(message)
    this.statusCode = StatusCodes.UNAUTHORIZED
  }
}

module.exports = UnauthorizedRequest
