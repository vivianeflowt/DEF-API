module.exports = async (req, res, next) => {
  console.log('MAIN-REQUEST-MIDDLEWARE');
  req.headers.api = {
    method: '',
    options: ''
  };
  // console.log(req.body);
  next();
};
