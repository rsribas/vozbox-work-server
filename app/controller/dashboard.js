'use strict'

const Controller = require('egg').Controller
const svgCaptcha = require('svg-captcha')
const dayjs = require('dayjs')

// const ACCOUNTCODE = '2.01'
// const EXTEN_BEGIN = '9550'

class Dashboard extends Controller {
  async index() {
    const { ctx } = this
    ctx.body = 'Welcome to VozBox !'
  }

  async captcha() {
    const { ctx } = this
    const code = ctx.query.code || '1234'
    const svg = svgCaptcha(code)

    ctx.type = 'svg'
    ctx.body = svg
  }

  // 获取后台首页面板数据
  async getPanelData() {
    const { ctx, service } = this

    // let [price, todayTask, unfinishedTodoList, reminder] = await Promise.all([
    let [busy, noanswer, answered, total] = await Promise.all([
      // service.bill.findSumPriceByDate(dayjs().format('YYYY-MM-DD')),
      // service.task.findAllByUid({ type: { [ctx.Op.in]: [1, 2] } }),
      // service.todoList.findUnfinishedByUid(),
      service.dashboard.findAllByUid(null, { disposition: 'BUSY', accountcode: { [ctx.Op.in]: [2, 2.01] } }),
      service.dashboard.findAllByUid(null, { disposition: 'NO ANSWER', accountcode: { [ctx.Op.in]: [2, 2.01] } }),
      service.dashboard.findAllByUid(null, { disposition: 'ANSWERED', accountcode: { [ctx.Op.in]: [2, 2.01] } }),
      service.dashboard.findAllByUid(null, { accountcode: { [ctx.Op.in]: [2, 2.01] } }),
    ])

    // 过滤支出
    // price = price.filter((item) => item.type === 2)
    ctx.print = {
      // consumption: price.length > 0 ? price[0].price : '0.00',
      busyCount: busy.count,
      noanswerCount: noanswer.count,
      answeredCount: answered.count,
      totalCount: total.count,
    }
  }
}

module.exports = Dashboard
