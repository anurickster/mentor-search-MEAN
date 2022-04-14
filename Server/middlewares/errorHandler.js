module.exports = (err, req, res, next) => {
  let status = 500;
  let message = 'Error';

  // res.status(500).json({
  //   auth: false,
  //   error: 'User Already exists',
  // });
  console.log('dfghjk');
  if (err.code == 11000) {
    message = `Duplicate key`;
    status = 200;
  }

  if (err.name === 'MongoError') {
    status = 500;
    message = 'MongoDB error';
  }
  if (err.name === 'InternalServerError') {
    status = 500;
    message = err.message;
  }
  if (err.name === 'ValidationError') {
    status = 200;
    message = err.message;
  }
  if (err.name === 'CastError') {
    status = 400;
    message = 'Invalid ID';
  }
  if (err.name === 'JsonWebTokenError') {
    status = 401;
    message = 'Invalid Token';
  }
  if (err.name === 'TokenExpiredError') {
    status = 401;
    message = 'Token Expired';
  }
  if (err.name === 'UnauthorizedError') {
    status = 401;
    message = 'Unauthorized';
  }
  if (err.name === 'ForbiddenError') {
    status = 403;
    message = 'Forbidden';
  }
  if (err.name === 'BadRequestError') {
    status = 400;
    message = err.message;
  }
  if (err.name === 'NotFoundError') {
    status = 404;
    message = err.message;
  }
  if (err.name === 'ConflictError') {
    status = 409;
    message = err.message;
  }

  res.status(status).json({
    success: false,
    message: message,
  });
};
