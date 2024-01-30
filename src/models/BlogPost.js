const BlogPostModel = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
        id: { type: DataTypes.INTEGER, primaryKey: true },
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        published: DataTypes.DATE,
        updated: DataTypes.DATE,
        userId: { type: DataTypes.INTEGER, foreignKey: true }
    },
        {
            timestamps: false,
            tableName: 'blog_posts',
            underscored: true,
        }
    );
    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User,
            { foreignKey: 'userId', as: 'users' })
    }
    return BlogPost;
}

module.exports = BlogPostModel;