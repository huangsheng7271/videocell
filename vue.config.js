// vue.config.js for less-loader@6.0.0
module.exports = {
    css: {
      loaderOptions: {
        less: {
          lessOptions: {
            javascriptEnabled: true,
            modifyVars: {
              'primary-color':'#f74455',
              'link-color':'#f74455',
              'border-radius-base': '2px',
            },
          },
        },
      },
    },
  };