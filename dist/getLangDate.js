"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLangDate = getLangDate;
var _reactDateObject = _interopRequireDefault(require("react-date-object"));
var _persian = _interopRequireDefault(require("react-date-object/calendars/persian"));
var _arabic = _interopRequireDefault(require("react-date-object/calendars/arabic"));
var _gregorian = _interopRequireDefault(require("react-date-object/calendars/gregorian"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function getLangDate(lang, data) {
  var date = new _reactDateObject["default"](data);
  switch (lang) {
    case 'fa':
      date.convert(_persian["default"]);
      break;
    case 'ar':
      date.convert(_arabic["default"]);
      break;
    default:
      date.convert(_gregorian["default"]);
  }
  return date.format();
}