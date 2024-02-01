const { BlogPost, Category, User } = require('../models');
const serviceResponse = require('../utils/messages');

const findAllPosts = async () => {
  const allPosts = await BlogPost.findAll({
    include: [{ model: User, as: 'user' }, 
      { model: Category,
        as: 'categories', 
        through: { attributes: [] } }],
  });
  const correctAllPosts = allPosts.map((post) => {
    const userWithoutPass = { ...post.user.dataValues }; 
    delete userWithoutPass.password;
    return {
      ...post.dataValues,
      user: userWithoutPass,
  
    }; 
  });
  return { status: serviceResponse.SUCCESS, data: correctAllPosts };
};

const findPostById = async (id) => {
  const postId = await BlogPost.findOne({ where: { id } });
  if (!postId) {
    return { status: serviceResponse.NOT_FOUND, data: { message: 'Post does not exist' } };
  }
  const [currPost] = await BlogPost.findAll({
    where: { id },
    include: [{ model: User, as: 'user' }, 
      { model: Category,
        as: 'categories', 
        through: { attributes: [] } }],
  });

  const newResponse = { ...currPost.user.dataValues };
  delete newResponse.password;

  const newResult = { ...currPost.dataValues, user: newResponse };

  return { status: serviceResponse.SUCCESS, data: newResult };
};

module.exports = {
  findAllPosts,
  findPostById,
};
