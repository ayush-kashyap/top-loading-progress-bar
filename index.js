"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressBar = ProgressBar;
exports.hideBar = hideBar;
exports.showBar = showBar;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ProgressBar(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "pro-bar",
    style: {
      display: "none",
      width: '100vw',
      position: 'fixed',
      top: '0',
      backgroundColor: 'transparent'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "progress",
    style: {
      height: "".concat(props.height),
      width: '0%',
      backgroundColor: "".concat(props.color),
      transition: 'width linear 50ms'
    }
  }));
}
var progressbar;
function hideBar() {
  document.querySelector(".progress").style.width = '0';
  document.querySelector(".pro-bar").style.display = 'none';
  clearInterval(progressbar);
}
function showBar() {
  document.querySelector(".pro-bar").style.display = 'block';
  var progress = document.querySelector('.progress');
  var per = 0;
  progressbar = setInterval(function () {
    if (progress.style.width <= "80%") {
      per++;
      progress.style.width = "".concat(per, "%");
    } else if (progress.style.width >= "80%") {
      per += 0.1;
      progress.style.width = "".concat(per, "%");
    }
  }, 50);
}
