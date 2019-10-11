module.exports = {
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
        .loader('vue-loader')
        .tap(options => {
          options.compilerModules = options.compilerModules || [];
          options.compilerModules.push({
            postTransformNode: require('vue-component-holder/holdify')()
          });
          return options;
        });

    // Cache may cause the injected 'holdify' option skipped
    config.module
      .rule('vue')
      .uses.delete('cache-loader');
  }
}