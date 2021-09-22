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
const template_1 = __importDefault(require('./template'));
const decorate_selector_1 = require('../utils/decorate-selector');
exports.default = new template_1.default(
  'ember',
  'Ember',
  'https://emberjs.com/',
  /**
   * Ideally, we'd point to https://github.com/ember-cli/ember-new-output
   * but there are a few tweaks that must be addressed before then.
   *  - Auto-detection of ember-cli projects as node projects,
   *    without requiring a sandbox.config.json
   *    PR: https://github.com/codesandbox-app/codesandbox-importers/pull/16
   *  - Ember-CLI initial build chokes on empty app/styles/app.css file
   *  - A small livereload fix, for proper port detection through the CSB proxy stuff
   *    BUG: https://github.com/ember-cli/ember-cli/issues/8073
   *
   * Here is a complete diff of these changes, w.r.t. the code generated by
   * `ember new my-app`
   *
   * https://github.com/ember-cli/ember-new-output/compare/stable...NullVoxPopuli:stable
   */
  'github/NullVoxPopuli/ember-new-output/tree/stable',
  decorate_selector_1.decorateSelector(() => '#E04E39'),
  {
    showOnHomePage: true,
    main: false,
    staticDeployment: false,
  }
);
