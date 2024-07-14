module.exports = {
  presets: ['module:@react-native/babel-preset'],
  env: {
    production: {
      plugins: ['react-native-reanimated/plugin'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.tsx', '.ts', '.js', '.json'],
        root: ['./'],
        alias: {
          '@app': './app',
          '@assets': './app/assets',
          '@components': './app/components',
          '@constants': './app/constants',
          '@features': './app/features',
          '@layout': './app/layout',
          '@lib': './app/lib',
          '@screens': './app/screens',
          '@services': './app/services',
          '@providers': './app/providers',
          '@utils': './app/utils',
        },
      },
    ],
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
      },
    ],
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
      },
    ],
  ],
}
