
exports.errorCode = {
  // 正常
  0: 'success',

  // 数据库无此数据 || 查询失败
  2: null,

  // 数据创建失败
  3: null,

  // 数据删除失败
  4: null,

  // 数据更新失败
  5: null,

  401: 'Falha no login, faça login novamente',

  400: 'Falha na validação do parâmetro',

  500: 'Erro interno do servidor'
}

// 消息枚举
exports.MessageTitle = {
  0: 'Mensagens do sistema',
  1: 'FichaNova'
}

// 站内消息类型
exports.messageType = {
  // 系统消息
  system: {
    welcome: {
      type: 0,
      content: 'Bem-vindo ao VozBox Work, que fornecerá um serviço completo！'
    }
  }
}

// exports.CdrWhere = {
//   accountcode = '2.01',
//   begin = '9550'
// }