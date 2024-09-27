const prefix =
  process.env.NODE_ENV === 'production' ? 'https://dahoon06.github.io/notion-blog/' : ''

module.exports = {
  output: 'export',
  basePath: '/notion-blog',
  images: {
    domains: ['www.notion.so', 'lh5.googleusercontent.com', 's3-us-west-2.amazonaws.com'],
  },
  assetPrefix: prefix,
  trailingSlash: true,
}
