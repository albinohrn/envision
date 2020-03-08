/* globals require:false, module:false, __dirname:false */
const path = require('path');
const common = require('./webpack.common.js');
const merge = require('webpack-merge');

module.exports = merge.strategy({ entry: 'prepend' })(common, {
   output: {
      filename: 'envision.js',
      path: path.resolve(__dirname, 'public/static/envision')
   }
});
