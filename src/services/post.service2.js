const { BlogPost } = require('../models');
const serviceResponse = require('../utils/messages');

const deletePost = async (postId, userId) => {
  const findPost = await BlogPost.findOne({ where: { id: postId } });
  if (!findPost) {
    return { status: serviceResponse.NOT_FOUND,
      data: {
        message: 'Post does not exist',
      } };
  }
  const postUser = await BlogPost.findOne({ where: { id: postId, userId } });

  if (!postUser) {
    return { status: serviceResponse.UNAUTHORIZED, data: { message: 'Unauthorized user' } };
  }

  await BlogPost.destroy({ where: { id: postId } });

  return { status: serviceResponse.NO_CONTENT, data: {} };
};

module.exports = {
  deletePost,
};