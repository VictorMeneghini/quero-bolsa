module.exports = {
  chainWebpack: config => {
    config.module
        .rule("vue")
        .use("vue-svg-inline-loader")
            .loader("vue-svg-inline-loader")
            .options({ /* ... */ });
},
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/scss/_variables.scss";
        `
      }
    }
  }
};