module.exports = (app) => {
    const { INTEGER, STRING, UUIDV4, UUID, DECIMAL, BIGINT, TEXT } = app.Sequelize
  
    const Schema = app.model.define(
      'cdr',
      {
        id: {
          type: UUID,
          defaultValue: UUIDV4,
          primaryKey: true,
          comment: '唯一ID',
        },
        email: {
          type: STRING(250),
          allowNull: false,
          defaultValue: '',
          comment: 'email',
        },
        password: {
            type: STRING(250),
            allowNull: false,
            defaultValue: '',
            comment: 'password',
          },
      },
      {
        underscored: true,
        comment: '资金流动',
        charset: 'utf8mb4',
        engine: 'InnoDB',
      }
    )
  
    return Schema
  }
  