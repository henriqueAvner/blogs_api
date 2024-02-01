const { BlogPost, Category, User } = require('../models');
const serviceResponse = require('../utils/messages');

const findAllPosts = async () => {
  const allPosts = await BlogPost.findAll({
    include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } }, 
      { model: Category, as: 'categories', through: { attributes: [] } }],
  });
  return { status: serviceResponse.SUCCESS, data: allPosts };
};
const findPostById = async (id) => {
  const postId = await BlogPost.findOne({ where: { id } });
  if (!postId) {
    return { status: serviceResponse.NOT_FOUND, data: { message: 'Post does not exist' } };
  }
  const [currPost] = await BlogPost.findAll({ where: { id },
    include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } }, 
      { model: Category,
        as: 'categories', 
        through: { attributes: [] } }],
  });
  return { status: serviceResponse.SUCCESS, data: currPost };
};
module.exports = {
  findAllPosts,
  findPostById,
};
