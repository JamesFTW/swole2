module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: [
         
      ],
    },
  },
  plugins: [ 
    [ 
      'module-resolver',
      {
        extensions: ['.tsx', '.ts', '.js', '.json'], 
      },
    ],
    'react-native-reanimated/plugin'
  ],
  plugins: [
    [
      "module:react-native-dotenv",
      {
        envName: "APP_ENV",
        moduleName: "@env",
        path: ".env"
      }
    ]
  ]
};
