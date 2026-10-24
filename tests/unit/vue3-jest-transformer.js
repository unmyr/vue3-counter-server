const crypto = require('crypto');
const fs = require('fs');
const babelJest = require('babel-jest').default.createTransformer();
const vue3Jest = require('@vue/vue3-jest');

module.exports = {
  process(source, filename, config, options) {
    const vueResult = vue3Jest.process(source, filename, config, options);
    const babelResult = babelJest.process(vueResult.code, filename, config, options);
    const code = typeof babelResult === 'string' ? babelResult : babelResult.code;

    if (code.includes('exports.render = render;')) {
      return {
        ...babelResult,
        code: `${code}\nexports.default = {...exports.default, render};`,
      };
    }

    return babelResult;
  },
  getCacheKey(source, filename, options) {
    return crypto
      .createHash('sha256')
      .update(vue3Jest.getCacheKey(source, filename, options))
      .update(babelJest.getCacheKey(source, filename, options))
      .update(fs.readFileSync(__filename))
      .digest('hex');
  },
};
