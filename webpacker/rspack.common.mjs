// shared webpack config object for dev, build, prod, demo...

// import type { Configuration } from '@rspack/cli';

// const config: Configuration = {
export const commonConfig = {
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: {
          loader: 'builtin:swc-loader',
          options: {
            sourceMap: true,
            jsc: {
              parser: {
                syntax: 'typescript',
                jsx: true,
              },
              externalHelpers: true,
              preserveAllComments: false,
              transform: {
                react: {
                  runtime: 'automatic',
                  throwIfNamespace: true,
                  useBuiltins: false,
                },
              },
            },
          },
        },
        type: 'javascript/auto',
      },
      {
        test: /\.ts$/,
        use: {
          loader: 'builtin:swc-loader',
          options: {
            sourceMap: true,
            jsc: {
              parser: {
                syntax: 'typescript',
              },
              externalHelpers: true,
              preserveAllComments: false,
            },
          },
        },
        type: 'javascript/auto',
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          { loader: 'style-loader', options: { esModule: false } },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg|ico)$/,
        type: 'asset',
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        type: 'asset',
        // type: 'asset/resource',
      },
    ],
  },
  optimization: {
    // Disabling minification because it takes too long on CI
    minimize: false,
  },
  plugins: [
    // new ReactRefreshPlugin(),
  ],
  experiments: {
    // css: true,
    rspackFuture: {
      // disableApplyEntryLazily: true,
    },
  },
};
