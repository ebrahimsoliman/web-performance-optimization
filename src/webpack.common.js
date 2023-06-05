const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
const { sync } = require("glob-all");

module.exports = {
  mode: "production",
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  entry: "./src/client.ts",
  module: {
    rules: [
      // Images: Copy image files to build folder
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp|woff(2)?|eot|ttf|otf|svg|)$/i,
        type: "asset/resource",
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(sass|scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ["imagemin-mozjpeg", { quality: 75, progressive: true }],
              "imagemin-pngquant",
              "imagemin-svgo",
            ],
          },
        },
        generator: [
          {
            // You can apply generator using `?as=webp`, you can use any name and provide more options
            preset: "webp",
            implementation: ImageMinimizerPlugin.imageminGenerate,
            options: {
              plugins: ["imagemin-webp"],
            },
          },
        ],
      }),
    ],
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "../dist"),
    assetModuleFilename: "assets/[hash][ext][query]",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      title: "Development",
    }),
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
    new PurgeCSSPlugin({
      paths: sync([
        path.join(__dirname, "**/*.ts"), // Add paths to all your TS files
        path.join(__dirname, "**/*.html"), // Add paths to all your HTML files
      ]),
    }),
  ],
};
