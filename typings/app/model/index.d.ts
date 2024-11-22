// This file is created by egg-ts-helper@1.35.1
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportBill = require('../../../app/model/bill');
import ExportBillType = require('../../../app/model/bill_type');
import ExportCdr = require('../../../app/model/cdr');
import ExportCompany = require('../../../app/model/company');
import ExportInnerMessage = require('../../../app/model/inner_message');
import ExportLog = require('../../../app/model/log');
import ExportMemorandum = require('../../../app/model/memorandum');
import ExportReminder = require('../../../app/model/reminder');
import ExportTask = require('../../../app/model/task');
import ExportTodoList = require('../../../app/model/todo_list');
import ExportUser = require('../../../app/model/user');
import ExportUserConfigure = require('../../../app/model/user_configure');

declare module 'egg' {
  interface IModel {
    Bill: ReturnType<typeof ExportBill>;
    BillType: ReturnType<typeof ExportBillType>;
    Cdr: ReturnType<typeof ExportCdr>;
    Company: ReturnType<typeof ExportCompany>;
    InnerMessage: ReturnType<typeof ExportInnerMessage>;
    Log: ReturnType<typeof ExportLog>;
    Memorandum: ReturnType<typeof ExportMemorandum>;
    Reminder: ReturnType<typeof ExportReminder>;
    Task: ReturnType<typeof ExportTask>;
    TodoList: ReturnType<typeof ExportTodoList>;
    User: ReturnType<typeof ExportUser>;
    UserConfigure: ReturnType<typeof ExportUserConfigure>;
  }
}
