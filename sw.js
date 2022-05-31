self.addEventListener('fetch', function(e) {
  // ここは空でもOK
})

// ライブラリのインポート
importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

// ファイルのキャッシュ
workbox.precaching.precacheAndRoute([
  {
    url: '/index.html',
    revision: '12345'
  },
  {
    url: '/app.css',
    revision: '12345'
  },
  {
  url: '/app.js',
    revision: '12345'
  },
])