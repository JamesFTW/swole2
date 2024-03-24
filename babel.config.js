module.exports = {
  presets: ['module:@react-native/babel-preset'],
  env: {
    production: {
      plugins: [
        'react-native-reanimated/plugin',
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
    [
      "@babel/plugin-transform-react-jsx", {
        "runtime": "automatic"
    }
    ],
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