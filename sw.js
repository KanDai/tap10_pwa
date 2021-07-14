self.addEventListener('fetch', function(e) {
  // ここは空でもOK
})

// ファイブラリのインポート
importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

// ファイルのキャッシュ
workbox.precaching.precacheAndRoute([
  {
    url: '/index.html',
    revision: '20210714'
  },
  {
    url: '/app.css',
    revision: '20210714'
  },
  {
  url: '/app.js',
    revision: '20210714'
  },
])