'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('posts_categories', {
      postId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        onDelete: 'CASCADE',
        field: 'post_id',
        references: {
          model: 'blog_posts',
          key: 'id',
        },
      },
      categoryId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        onDelete: 'CASCADE',
        field: 'category_id',
        references: {
          model: 'categories',
          key: 'id',
        },
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('posts_categories');
  }
};
