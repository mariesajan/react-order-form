module.exports= {
  context: __dirname,
  entry: './jsx/client.jsx',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.jsx$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['react', 'es2015', 'stage-0'],
        plugins: ['react-html-attrs']
      }
    }]
  },
  output: {
    path: __dirname,
    filename: 'client.min.js'
  }
}
