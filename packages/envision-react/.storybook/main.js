module.exports = {
   webpackFinal: (config) => console.dir(config, { depth: null }) || config,
   stories: ['../src/**/*.stories.js'],
   addons: [
      '@storybook/addon-actions',
      '@storybook/addon-links',
      '@storybook/addon-knobs/register',
   ],
};
