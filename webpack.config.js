const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const transformer = require('ts-reflection/transformer').default;

module.exports = {
  entry: "./src/index.tsx",
  target: "web",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  resolve: {
    alias: {
        react: path.resolve('./node_modules/react'),
    },
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  module: {
    rules: [
    {
        test: /\.ts(x)?$/,
        loader: "awesome-typescript-loader",
        exclude: /node_modules/,
        options: {
            getCustomTransformers: program => ({
                before: [transformer(program)],
            }),
        },
    },
    {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
    },
    {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
    },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public",  "index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "./src/index.css",
    }),
  ],
};
