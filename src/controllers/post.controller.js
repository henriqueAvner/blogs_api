const { postsService } = require('../services');
const httpMapCode = require('../utils/httpCodeMapper');

const findAllPosts = async (req, res) => {
  const { status, data } = await postsService.findAllPosts();
  return res.status(httpMapCode[status]).json(data);
};

module.exports = {
  findAllPosts,
};