const { BlogPost, Category, User, PostCategory } = require('../models');
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
const insertNewPost = async (title, content, categoryIds, userId) => {
  if (!title || !content) {
    return { status: serviceResponse.INVALID_DATA,
      data: {
        message: 'Some required fields are missing',
      } };
  }
  const ids = await Category.findAll({ where: { id: categoryIds } });
  if (ids.length !== categoryIds.length) {
    return { status: serviceResponse.INVALID_DATA,
      data: {
        message: 'one or more "categoryIds" not found',
      } };
  }
  const result = await BlogPost.create({ title, content, userId });
  const mapcategory = categoryIds.map((categoryId) => ({ postId: result.id, categoryId }));
  await PostCategory.bulkCreate(mapcategory);
  return { status: serviceResponse.CREATED, data: result };
};
const updatePost = async (title, content, userId, postId) => {
  const findUser = await BlogPost.findOne({ where: { id: postId } });
  if (findUser.userId !== userId) {
    return { status: serviceResponse.UNAUTHORIZED, data: { message: 'Unauthorized user' } };
  }
  
  findUser.update({ title, content }, { where: { id: userId } });
  
  await findUser.save();
  const { data } = await findPostById(postId);
  return { status: serviceResponse.SUCCESS, data };
};
module.exports = {
  findAllPosts,
  findPostById,
  insertNewPost,
  updatePost,
};