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
    const sanitizedUser = { ...post.user.dataValues }; 
    delete sanitizedUser.password;
  
    return {
      ...post.dataValues,
      user: sanitizedUser,
  
    }; 
  });

  return { status: serviceResponse.SUCCESS, data: correctAllPosts };
};

module.exports = {
  findAllPosts,
};
