const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class Page extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
       static associate(models) {
        // define association here
        Page.hasMany(models.Row, {
          foreignKey: 'pageId',
        })

        // Page.belongsTo(models.PageOwner, {
        //     foreignKey: 'PageOwnerOd',
        //     onDelete: 'CASCADE'
        //   })
}
    };
    Page.init({}, {
      sequelize,
      modelName: 'Page',
    });
    return Page;
  };