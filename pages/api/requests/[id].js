const Request = require('~/schemas/Request');

module.exports = async (req, res) => {
  if (req.method !== 'GET') return res.status({ status: 404 }).send();

  const {
    query: { id },
  } = req;

  let request;
  try {
    request = await Request.findById(id);
  } catch (error) {
    console.error('Error finding request', error);
    return res.status(500).send({
      error,
    });
  }
  return res.status(200).json({ request });
};
