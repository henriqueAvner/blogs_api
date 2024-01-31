const { Category } = require('../models');
const serviceResponse = require('../utils/messages');

const addNewCategory = async (name) => {
  if (!name) {
    return { status: serviceResponse.INVALID_DATA,
      data: { message: '"name" is required' } };
  }
  const newCategory = await Category.create({ name });

  return { status: serviceResponse.CREATED, data: newCategory };
};

const getAllCategories = async () => {  
  const allCategories = await Category.findAll();
  return { status: serviceResponse.SUCCESS, data: allCategories };
};

module.exports = {
  addNewCategory,
  getAllCategories,
};