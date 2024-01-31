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

module.exports = {
  findAllPosts,
};
