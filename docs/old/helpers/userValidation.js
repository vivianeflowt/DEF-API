const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'f15a2893c0759a',
    pass: '0725b45430444d',
  },
});

module.exports = (email = '', uid) => {
  const message = {
    from: 'subscription@delight.com.br',
    to: email,
    subject: 'delight user verify',
    text: 'delight user verify',
  };
  transport.sendMail(message, (err, info) => {
    if (err) {
      console.log(err);
      return false;
    }
    console.log(info);
    return true;
  });
};
