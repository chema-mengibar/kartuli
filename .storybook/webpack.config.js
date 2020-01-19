const path = require("path");
module.exports = ({ config }) => {
  config.module.rules.push(
    {
      test: /\.ts$|\.tsx$/,
      loader: 'ts-loader',
    },
  );
  config.resolve.alias = {
    'react-router-dom': path.resolve(__dirname, 'src/utilities/react-router-dom'),
  }

  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};