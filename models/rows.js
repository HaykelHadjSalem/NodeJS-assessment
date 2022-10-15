const {
    Model
  } = require('sequelize');

  module.exports = (sequelize, DataTypes) => {
    class Row extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
        // define association here
        Row.belongsTo(models.Page, {
          foreignKey: 'pageId',
          onDelete: 'CASCADE'
        })

        Row.hasMany(models.Row, {
            foreignKey: 'rowId',
          })

      }
    };
    Row.init({
      pageId: DataTypes.INTEGER,
    }, {
      sequelize,
      modelName: 'Row',
    });
    return Row;
  };