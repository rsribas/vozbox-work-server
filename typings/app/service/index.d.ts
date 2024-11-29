// This file is created by egg-ts-helper@1.35.1
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportAsteriskCdr = require('../../../app/service/asterisk_cdr');
import ExportBill = require('../../../app/service/bill');
import ExportBillType = require('../../../app/service/bill_type');
import ExportCdrList = require('../../../app/service/cdrList');
import ExportCompany = require('../../../app/service/company');
import ExportDashboard = require('../../../app/service/dashboard');
import ExportInnerMessage = require('../../../app/service/inner_message');
import ExportLog = require('../../../app/service/log');
import ExportMail = require('../../../app/service/mail');
import ExportMemorandum = require('../../../app/service/memorandum');
import ExportReminder = require('../../../app/service/reminder');
import ExportTask = require('../../../app/service/task');
import ExportTodoList = require('../../../app/service/todo_list');
import ExportUser = require('../../../app/service/user');
import ExportUserConfigure = require('../../../app/service/user_configure');

declare module 'egg' {
  interface IService {
    asteriskCdr: AutoInstanceType<typeof ExportAsteriskCdr>;
    bill: AutoInstanceType<typeof ExportBill>;
    billType: AutoInstanceType<typeof ExportBillType>;
    cdrList: AutoInstanceType<typeof ExportCdrList>;
    company: AutoInstanceType<typeof ExportCompany>;
    dashboard: AutoInstanceType<typeof ExportDashboard>;
    innerMessage: AutoInstanceType<typeof ExportInnerMessage>;
    log: AutoInstanceType<typeof ExportLog>;
    mail: AutoInstanceType<typeof ExportMail>;
    memorandum: AutoInstanceType<typeof ExportMemorandum>;
    reminder: AutoInstanceType<typeof ExportReminder>;
    task: AutoInstanceType<typeof ExportTask>;
    todoList: AutoInstanceType<typeof ExportTodoList>;
    user: AutoInstanceType<typeof ExportUser>;
    userConfigure: AutoInstanceType<typeof ExportUserConfigure>;
  }
}
