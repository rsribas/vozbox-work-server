'use strict'

const Service = require('egg').Service

class CdrList extends Service {

  async create(data) {
    const { ctx } = this
    const uid = ctx.user.uid
    return ctx.model_cdr.TodoList.create({ uid, ...data })
  }

  async findAndCountAllByUid(options = {}) {
    console.log(options);
    console.log('teste');
    const { ctx, app } = this
    // const uid = ctx.user.uid
    return ctx.model_cdr.CdrList.findAndCountAll({
      attributes: [
        'src',
        'dst',
        'disposition',
        'duration'
      ],
      where: {
        [ctx.Op.and]: [
          app.Sequelize.where(
            app.Sequelize.fn('DATE', app.Sequelize.col('calldate')),
            '<=',
            options.endDate
          ),
          app.Sequelize.where(
            app.Sequelize.fn('DATE', app.Sequelize.col('calldate')),
            '>=',
            options.startDate
          )
        ],
        // uid,
      },
      order: [
        ['calldate', 'DESC']
      ],
      // group: ['cdr.src'],
      ...options
    })
  }

  // 检索所有未完成的数据
  async findUnfinishedByUid(options) {
    const { ctx } = this
    // const uid = ctx.user.uid
    return ctx.model_cdr.CdrList.findAndCountAll({
      where: {
        status: 1,
        // uid,
      },
      order: [
        ['calldate', 'DESC']
      ],
      ...options
    })
  }

  /**
   * @param {String} id
   */
  async deleteById(id) {
    const { ctx } = this
    const uid = ctx.user.uid
    id = String(id).split(',')
    return ctx.model.TodoList.destroy({ where: {
      uid,
      id: {
        [ctx.Op.in]: id
      }
    } })
  }

  /**
   * @param {String} name
   */
  async findOneByName(name) {
    const { ctx } = this
    const uid = ctx.user.uid
    return ctx.model.TodoList.findOne({
      where: { name, uid }
    })
  }

  /**
   * @param {String} id
   * @param {Object} updateFields
   */
  async updateById(id, updateFields) {
    const { ctx } = this
    const uid = ctx.user.uid
    return ctx.model.TodoList.update(updateFields, {
      where: { uid, id }
    })
  }
}

module.exports = CdrList
