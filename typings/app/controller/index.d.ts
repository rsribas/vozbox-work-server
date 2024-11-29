// This file is created by egg-ts-helper@1.35.1
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportAsteriskCdr = require('../../../app/controller/asterisk_cdr');
import ExportBill = require('../../../app/controller/bill');
import ExportBillType = require('../../../app/controller/bill_type');
import ExportCdrList = require('../../../app/controller/cdrList');
import ExportCommon = require('../../../app/controller/common');
import ExportCompany = require('../../../app/controller/company');
import ExportDashboard = require('../../../app/controller/dashboard');
import ExportInnerMessage = require('../../../app/controller/inner_message');
import ExportLog = require('../../../app/controller/log');
import ExportMemorandum = require('../../../app/controller/memorandum');
import ExportReminder = require('../../../app/controller/reminder');
import ExportSystem = require('../../../app/controller/system');
import ExportTask = require('../../../app/controller/task');
import ExportTodoList = require('../../../app/controller/todo_list');
import ExportUser = require('../../../app/controller/user');
import ExportUserConfigure = require('../../../app/controller/user_configure');

declare module 'egg' {
  interface IController {
    asteriskCdr: ExportAsteriskCdr;
    bill: ExportBill;
    billType: ExportBillType;
    cdrList: ExportCdrList;
    common: ExportCommon;
    company: ExportCompany;
    dashboard: ExportDashboard;
    innerMessage: ExportInnerMessage;
    log: ExportLog;
    memorandum: ExportMemorandum;
    reminder: ExportReminder;
    system: ExportSystem;
    task: ExportTask;
    todoList: ExportTodoList;
    user: ExportUser;
    userConfigure: ExportUserConfigure;
  }
}
