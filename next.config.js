// const isProduction = process.env.NODE_ENV === 'production'; // 環境を判定
// const basePath = isProduction ? '/blog-nextjs' : ''; // 本番環境のみ basePath を設定

const basePath = '/blog-nextjs'; // 本番環境のみ basePath を設定

module.exports = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: basePath,
};

console.log('Base Path:', basePath);
console.log('Environment:', process.env.NODE_ENV);