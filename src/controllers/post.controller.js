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

const insertNewPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.locals;
  
  const { status, data } = await postsService.insertNewPost(title, content, categoryIds, id);
  return res.status(httpMapCode[status]).json(data);
};

const updatePost = async (req, res) => {
  const { title, content } = req.body;
  const { id: postId } = req.params;
  const { id: userId } = req.locals;

  const { status, data } = await postsService.updatePost(title, content, userId, postId);
  return res.status(httpMapCode[status]).json(data);
};

module.exports = {
  findAllPosts,
  findPostById,
  insertNewPost,
  updatePost,
};