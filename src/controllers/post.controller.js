const { postsService } = require('../services');
const httpMapCode = require('../utils/httpCodeMapper');

const findAllPosts = async (req, res) => {
  const { status, data } = await postsService.findAllPosts();
  return res.status(httpMapCode[status]).json(data);
};

const findPostById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await postsService.findPostById(id);
  return res.status(httpMapCode[status]).json(data);
};

module.exports = {
  findAllPosts,
  findPostById,
};