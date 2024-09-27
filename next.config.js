const prefix =
  process.env.NODE_ENV === 'production' ? 'https://dahoon06.github.io/notion-blog/' : ''

module.exports = {
  images: {
    domains: ['www.notion.so', 'lh5.googleusercontent.com', 's3-us-west-2.amazonaws.com'],
  },
  output:'export',
  assetPrefix: prefix,
}
