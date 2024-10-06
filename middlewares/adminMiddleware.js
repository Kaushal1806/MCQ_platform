// middlewares/adminMiddleware.js

module.exports = function (req, res, next) {
    if (req.session.user && req.session.user.isAdmin) {
      return next();
    }
    return res.status(403).send('Access denied: Admins only');
  };
  