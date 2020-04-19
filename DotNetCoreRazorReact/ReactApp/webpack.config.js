const path = require("path");

function srcPath(subdir) {
  return path.join(__dirname, "src", subdir);
}

module.exports = (env = {}, argv = {}) => {
  const isProd = argv.mode === "production";

  const config = {
    mode: argv.mode || "development",
    entry: {
      react_app: "./src/index.tsx"
    },
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "../wwwroot/dist"),
      publicPath: "/dist/"
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
      alias: {
        common: srcPath("src/common")
      }
    },
    module: {
      rules: [
        {
          test: /\.ts|tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: [
                  ["@babel/preset-env"],
                  ["@babel/preset-react"],
                  ["@babel/typescript"]
                ],
                plugins: [
                  ["@babel/plugin-proposal-class-properties", { loose: true }],
                  ["@babel/plugin-transform-runtime"]
                ]
              }
            }
          ]
        },
        {
          test: /\.less$/,
          loaders: [
            "style-loader",
            "css-loader",
            {
              loader: "less-loader",
              options: {
                javascriptEnabled: true
              }
            }
          ],
          include: path.resolve(__dirname, "./")
        }
      ]
    }
  };

  if (!isProd) {
    config.devtool = "eval-source-map";
    config.devServer = {
      index: "", // specify to enable root proxying
      contentBase: path.resolve(__dirname, "../wwwroot/dist"),
      proxy: {
        context: () => true,
        target: "https://localhost:5001",
        secure: false
      },
      hot: true
    };
  }

  return config;
};
