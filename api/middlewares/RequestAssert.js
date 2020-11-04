module.exports = async (req, res, next) => {
  console.log('MAIN-REQUEST-MIDDLEWARE');
  req.body.data = {};
  req.body.opt = {};
  req.body.auth = {
    authorized: false
  };
  console.log(req.body);
  next();
};
