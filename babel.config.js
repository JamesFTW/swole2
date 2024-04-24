module.exports = {
  presets: [
    'module:metro-react-native-babel-preset', // This preset is specifically for React Native
    '@babel/preset-env',
    '@babel/preset-react', // Enables JSX support
    '@babel/preset-typescript', // Adds TypeScript support
  ],
  plugins: [
    '@babel/plugin-transform-runtime', // Helps with async/await and generators
    // Align 'loose' configuration for all relevant plugins
    ['@babel/plugin-transform-class-properties', { loose: false }],
    ['@babel/plugin-transform-private-methods', { loose: false }],
    ['@babel/plugin-transform-private-property-in-object', { loose: false }],
  ],
}
