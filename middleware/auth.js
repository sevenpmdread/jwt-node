const jwt = require('jsonwebtoken')
const {UnauthorizedRequestError} = require('../errors/')
const authMiddleware = (req,res,next) => {
  const authheader = req.headers.authorization
  if(!authheader || !authheader.startsWith('Bearer '))
  {
    throw new UnauthorizedRequestError('auth header is corrupted')
  }
  const token = authheader.split(' ')[1]
  try {
    const decoded  =  jwt.verify(token,process.env.JWT_SECRET)
    const {id,username} = decoded
    req.user  = {id,username}
    console.log(decoded)
    next()
  } catch (error) {
    console.log(error)
    throw new UnauthorizedRequestError('Not authorized to access this route')
  }
//  next()

}
module.exports = authMiddleware
