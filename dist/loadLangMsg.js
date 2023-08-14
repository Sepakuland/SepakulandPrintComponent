"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.loadLangMsg = loadLangMsg;
var _kendoReactIntl = require("@progress/kendo-react-intl");
var _faIR = _interopRequireDefault(require("./src/fa-IR.json"));
var _caGeneric = _interopRequireDefault(
  require("cldr-dates-full/main/fa/ca-generic.json")
);
var _caGregorian = _interopRequireDefault(
  require("cldr-dates-full/main/fa/ca-gregorian.json")
);
var _ar = _interopRequireDefault(require("./src/ar.json"));
var _caGeneric2 = _interopRequireDefault(
  require("cldr-dates-full/main/ar/ca-generic.json")
);
var _caGregorian2 = _interopRequireDefault(
  require("cldr-dates-full/main/ar/ca-gregorian.json")
);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function loadLangMsg(lang) {
  switch (lang) {
    case "fa":
      (0, _kendoReactIntl.load)(_caGeneric["default"], _caGregorian["default"]);
      (0, _kendoReactIntl.loadMessages)(_faIR["default"], "fa-IR");
      break;
    case "ar":
      (0, _kendoReactIntl.load)(
        _caGeneric2["default"],
        _caGregorian2["default"]
      );
      (0, _kendoReactIntl.loadMessages)(_ar["default"], "ar");
      break;
    default:
  }
}
