import path from "path";
import nodeExternals from "webpack-node-externals";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  target: "node",
  entry: "./server/index.jsx",
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, "server-build"),
    filename: "index.cjs",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
