import * as webpack from 'webpack';
import * as WebpackDevServer from 'webpack-dev-server';
import config from '../webpack.config';

export default function dev(gulp) {
  return () => {

    new WebpackDevServer(webpack(config), {
      publicPath: config.output.publicPath,
      hot: false,
      historyApiFallback: true
    }).listen(3000, 'localhost', function (err, result) {
      if (err) {
        console.log(err);
      }

      console.log('Listening at localhost:3000');
    });
  };
}

