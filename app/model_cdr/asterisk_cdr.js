module.exports = (app) => {
  const { INTEGER, STRING, UUIDV4, UUID, DECIMAL, BIGINT, TEXT, DATE } = app.Sequelize

  const Schema = app.model_cdr.define(
    'cdr',
    {
      calldate: {
        type: DATE,
        allowNull: false,
        comment: '用户ID',
      },
      clid: {
        type: STRING(250),
        allowNull: false,
        defaultValue: 0,
        comment: '金额',
      },
      src: {
        type: STRING(250),
        allowNull: false,
        defaultValue: 0,
        comment: '日期',
      },
      dst: {
        type: STRING(250),
        allowNull: false,
        // 定义外键
        defaultValue: 0,
        comment: '外键ID',
      },
      duration: {
        type: INTEGER,
        allowNull: false,
        defaultValue: '',
        comment: '备注信息',
      },
      billsec: {
        type: INTEGER,
        comment: '图片地址，由于条件有限，只存储base64',
      },
      disposition: {
        type: STRING(250),
        allowNull: false,
        defaultValue: '',
        comment: '备注信息',
      },
      amaflags: {
        type: INTEGER,
        allowNull: false,
        defaultValue: '',
        comment: '备注信息',
      },
      accountcode: {
        type: STRING(250),
        allowNull: false,
        defaultValue: '',
        comment: '备注信息',
      },
      uniqueid: {
        type: STRING(250),
        allowNull: false,
        defaultValue: '',
        primaryKey: true,
        comment: '备注信息',
      },
      userfield: {
        type: STRING(250),
        allowNull: false,
        defaultValue: '',
        comment: '备注信息',
      },
    },
    {
      timestamps: false,
      freezetablename: true,
      tableName: 'cdr',
      underscored: true,
      comment: '活动清单',
      charset: 'utf8mb4',
      engine: 'InnoDB'
    }
    )
    // Schema.removeAttribute('id');

  return Schema
}
