
const basePath = '/blog-nextjs';

module.exports = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

console.log('Base Path:', basePath);
console.log('Environment:', process.env.NODE_ENV);