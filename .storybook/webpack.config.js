const path = require("path");

module.exports = ({ config }) => {

  var args = process.argv.slice(2);
  const ignoreTypescript = args.indexOf('ts-ignore') > -1
  
  config.module.rules.push(
    {
      test: /\.ts$|\.tsx$/,
      loader: 'ts-loader',
      options: {
        transpileOnly: ignoreTypescript 
      }
    },
  );
  config.resolve.alias = {
    'react-router-dom': path.resolve(__dirname, 'src/utilities/react-router-dom'),
  }
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};