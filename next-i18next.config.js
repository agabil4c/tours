module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'de'], // Add all your supported languages
    //localeDetection: true,
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};