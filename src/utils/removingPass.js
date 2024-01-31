module.exports = (fullData) => {
  const { password, ...data } = fullData;
  return data;
};
