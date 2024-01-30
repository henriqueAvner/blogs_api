const PostCategoryModel = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
        postId: { type: DataTypes.INTEGER, foreignKey: true },
        categoryId: { type: DataTypes.INTEGER, foreignKey: true }
    },
        {
            timestamps: false,
            underscored: true,
            tableName: 'posts_categories'
        }
    );
    PostCategory.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, {
            as: 'categories',
            through: PostCategory,
            foreignKey: 'postId',
            otherKey: 'categoryId'
        })
        models.Category.belongsToMany(models.BlogPost, {
            as: 'users',
            through: PostCategory,
            foreignKey: 'categoryId',
            otherKey: 'postId',
        })
    };


    return PostCategory;
}

module.exports = PostCategoryModel;