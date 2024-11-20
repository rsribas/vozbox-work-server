// This file is created by egg-ts-helper@1.35.1
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportUserRequired = require('../../../app/middleware/user_required');

declare module 'egg' {
  interface IMiddleware {
    userRequired: typeof ExportUserRequired;
  }
}
