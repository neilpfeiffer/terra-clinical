/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const testSettings = require('../node_modules/terra-toolkit').testSettings;
const resolve = require('path').resolve;
const nightwatchConfiguration = require('../node_modules/terra-toolkit/lib/nightwatch.json');

module.exports = (settings => (
  testSettings(resolve('../../packages/terra-clinical-site/webpack.config'), settings)
))(nightwatchConfiguration);
