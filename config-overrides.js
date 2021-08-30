const { addLessLoader, override, fixBabelImports } = require("customize-cra");

module.exports = override(
  fixBabelImports("antd", {
    libraryDirectory: "es",
    libraryName: "antd",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true
  })
);
