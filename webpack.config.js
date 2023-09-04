const path = require('path');

module.exports = {
  entry: './src/index.js', // Specify the entry point of your application
  target: 'node', // Specify the target environment (Node.js)
  mode: 'production', // Set the mode to 'production' or 'development'
  output: {
    filename: 'bundle.js', // Specify the output bundle file name
    path: path.resolve(__dirname, 'dist'), // Specify the output directory
  },

  // Add any necessary loaders and rules for your project
  module: {
    rules: [
      {
        test: /\.js$/, // Apply the loader to JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel for JavaScript transpilation (if needed)
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },

  // Add any necessary plugins and configurations
  plugins: [],

  // Specify any additional configurations as needed
  resolve: {
    extensions: ['.js'], // Specify file extensions to resolve (e.g., .js, .jsx)
    modules: ['node_modules', path.resolve(__dirname, '../node_modules')]
  },
};
