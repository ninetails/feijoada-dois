import webpack from 'webpack';

const nodeEnv = process.env.NODE_ENV || 'development';

export default {
  entry: './index.js',

  output: {
    path: 'public',
    filename: 'bundle.js',
    publicPath: ''
  },

  module: {
    resolve: {
      extensions: ['', '.js', '.styl']
    },

    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
      { test: /\.styl$/, exclude: /node_modules/, loader: 'style!css?sourceMap&minimize!stylus' }
    ]
  },
  plugins: nodeEnv === 'production' ? [
    new webpack.DefinePlugin({
      'process.env': { 'NODE_ENV': JSON.stringify(nodeEnv) }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      output: {
        comments: false
      },
      compress: {
        warnings: false
      }
    })
  ] : [],
  debug: nodeEnv !== 'production',
  devtool: nodeEnv === 'production' ? '#source-map' : '#inline-source-map'
}
