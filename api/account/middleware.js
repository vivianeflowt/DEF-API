// @

const authorization = async (req, res, next) => {
  try {
    console.log(' . account authorization middleware');
  } catch (error) {
    console.log(' . account authorization middleware');
    console.log(error);
  }
  next();
};

module.exports = {
  authorization
};
