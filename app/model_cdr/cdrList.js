module.exports = app => {
  const { INTEGER, TEXT, TINYINT, DATE, STRING, UUID, UUIDV4 } = app.Sequelize

  const Schema = app.model_cdr.define('cdr', {
    calldate: DATE,
    uniqueid: {
      type: STRING(250),
      allowNull: false,
      defaultValue: '',
      primaryKey: true,
      comment: '备注信息',
    },
    src: STRING(200),
    dst: STRING(200),
    duration: INTEGER,
    disposition: STRING(200),
    accountcode: STRING(50),
  },
  //   calldate: {
  //     type: DATE,
  //     // defaultValue: '',
  //     allowNull: false,
  //     comment: 'calldate'
  //   },
  //   uniqueid: {
  //     type: TEXT,
  //     primaryKey: true,
  //     allowNull: false,
  //     comment: 'uniqueid'
  //   },
  //   src: {
  //     type: TEXT,
  //     defaultValue: '',
  //     allowNull: false,
  //     comment: 'src'
  //   },
  //   dst: {
  //     type: TEXT,
  //     defaultValue: '',
  //     allowNull: false,
  //     comment: 'dst'
  //   },
  // }, 
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
