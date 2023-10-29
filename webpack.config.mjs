import path from "path";

export default {
  mode: "development", // ビルドモードを"development"に設定
  entry: {
    bundle: ["./src/js/index.js", "./src/js/main.js"],
  },
  output: {
    path: path.resolve(new URL(".", import.meta.url).pathname, "dist/js"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
