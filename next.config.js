// next.config.js
module.exports = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/blog-nextjs',
};

console.log('Base Path:', basePath);
console.log('Environment:', process.env.NODE_ENV);