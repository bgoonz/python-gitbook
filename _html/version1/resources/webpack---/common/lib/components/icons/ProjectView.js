'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule
      ? mod
      : {
          default: mod,
        };
  };
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.ProjectViewIcon = void 0;
const react_1 = __importDefault(require('react'));
const IconBase_1 = __importDefault(require('react-icons/IconBase'));
exports.ProjectViewIcon = (props) =>
  react_1.default.createElement(
    IconBase_1.default,
    Object.assign(
      {
        fill: 'none',
        viewBox: '0 0 24 24',
      },
      props
    ),
    react_1.default.createElement('rect', {
      width: 4.998,
      height: 4.998,
      x: 4.001,
      y: 12.078,
      fill: 'currentColor',
      rx: 1.129,
      transform: 'rotate(-45 4.001 12.078)',
    }),
    react_1.default.createElement('rect', {
      width: 4.998,
      height: 4.998,
      x: 8.544,
      y: 7.534,
      fill: 'currentColor',
      rx: 1.129,
      transform: 'rotate(-45 8.544 7.534)',
    }),
    react_1.default.createElement('rect', {
      width: 4.998,
      height: 4.998,
      x: 8.544,
      y: 16.622,
      fill: 'currentColor',
      rx: 1.129,
      transform: 'rotate(-45 8.544 16.622)',
    }),
    react_1.default.createElement('rect', {
      width: 4.998,
      height: 4.998,
      x: 13.089,
      y: 12.078,
      fill: 'currentColor',
      rx: 1.129,
      transform: 'rotate(-45 13.089 12.078)',
    })
  );
