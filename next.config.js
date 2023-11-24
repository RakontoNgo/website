/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    dangerouslyAllowSVG: true,
    domains: ['cdn.sanity.io', 'picsum.photos'],
  },
  experimental: { urlImports: ['https://themer.sanity.build/'] },
};
