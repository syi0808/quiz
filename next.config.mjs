import path from 'path';
import * as url from 'url';
import stylexPlugin from '@stylexjs/nextjs-plugin';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@stylexjs/open-props'],
  reactStrictMode: false,
};

export default stylexPlugin({
  aliases: {
    '@/*': [path.join(__dirname, './src/*')],
  },
  rootDir: __dirname,
})(nextConfig);
