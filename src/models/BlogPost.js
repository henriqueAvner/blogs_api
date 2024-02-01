const BlogPostModel = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        published: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
        updated: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
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
            { foreignKey: 'userId', as: 'user' })
    }
    return BlogPost;
}

module.exports = BlogPostModel;