// vue.config.js for less-loader@6.0.0
module.exports = {
    css: {
      loaderOptions: {
        less: {
          lessOptions: {
            javascriptEnabled: true,
            modifyVars: {
              //'primary-color': '#1DA57A',
              //'link-color': '#1DA57A',
              'primary-color':'#ffb200',
              'link-color':'#ffb200',
              'border-radius-base': '2px',
            },
          },
        },
      },
    },
  };