//import { i18n } from './next-i18next.config.js';
/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  //output: 'export',
  reactStrictMode: false,
  // images: {
  //   unoptimized: true,
  // },
  i18n
};

module.exports = nextConfig;