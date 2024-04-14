module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: [
    '../app/components/**/stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../app/features/**/stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
}
