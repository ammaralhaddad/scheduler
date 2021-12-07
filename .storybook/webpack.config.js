const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.scss$/,
    loaders: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
    include: path.resolve(__dirname, "../"),
  });

  config.plugins.push(new MiniCssExtractPlugin({ filename: "[name].css" }));

  return {
    ...config,
    resolve: {
      ...config.resolve,
      modules: [path.resolve(__dirname, "../src"), ...config.resolve.modules],
    },
  };
};
