const path = require("path");
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@views": path.resolve(__dirname, "src/views/"),
        "@router": path.resolve(__dirname, "src/router"),
        "@comps": path.resolve(__dirname, "src/components"),
        "@utils": path.resolve(__dirname, "src/utils"),
        "@api": path.resolve(__dirname, "src/api"),
      },
    },
  },
};
