const { categoryService } = require('../services');
const httpMapCode = require('../utils/httpCodeMapper');

const addNewCategory = async (req, res) => {
  const { name } = req.body;
  const { status, data } = await categoryService.addNewCategory(name);
  return res.status(httpMapCode[status]).json(data);
};

const getAllCategories = async (req, res) => {
  const { status, data } = await categoryService.getAllCategories();
  return res.status(httpMapCode[status]).json(data);
};

module.exports = {
  addNewCategory,
  getAllCategories,
};