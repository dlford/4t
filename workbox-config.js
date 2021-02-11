module.exports = {
  globDirectory: 'build/',
  globPatterns: ['**/*.{js,json,css,ico,html,jpg,txt}'],
  swDest: 'build/sw.js',
  cacheId: 'v1',
  cleanupOutdatedCaches: true,
  clientsClaim: true,
  mode: 'production',
  navigationPreload: true,
  runtimeCaching: [
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'images_v1',
        expiration: {
          maxEntries: 10,
        },
      },
    },
  ],
}
