const headerSanitize = async (header) => {
  console.log('HEADERS');
  console.log(header);
  return header;
};

const bodySanitize = async (body) => {
  console.log('BODY');
  console.log(body);
  return body;
};

module.exports.sanitize = {
  header: headerSanitize,
  body: bodySanitize
};
