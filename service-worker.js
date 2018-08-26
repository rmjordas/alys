/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "584c596af5cb2d1e3a0c3a4a6f565717"
  },
  {
    "url": "assets/css/0.styles.e08a833b.css",
    "revision": "a86ef1b171b0d8401efb49d9e2a5976f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.af475edf.js",
    "revision": "19f4557c8d87ee24a16092e7631c021c"
  },
  {
    "url": "assets/js/11.75ff1a7f.js",
    "revision": "ddcb041c65abfb01f343b7d1f2341611"
  },
  {
    "url": "assets/js/12.be64434d.js",
    "revision": "74b346ad571a642a9f12839eed403f76"
  },
  {
    "url": "assets/js/13.da3c97aa.js",
    "revision": "f06cfc18e79476b991cbfecc3c6c1480"
  },
  {
    "url": "assets/js/14.f67f9611.js",
    "revision": "48dc444e5f11868168fd5d61a0eab087"
  },
  {
    "url": "assets/js/15.5d623c5c.js",
    "revision": "a38c39c8b81efebb9a872ba5d265d412"
  },
  {
    "url": "assets/js/16.05058191.js",
    "revision": "2843e28dedcf9892ccf6ffe4e5759c06"
  },
  {
    "url": "assets/js/17.60d97a0f.js",
    "revision": "eafd15877f1a8c65b1ee433a30c3076b"
  },
  {
    "url": "assets/js/2.448ed1ef.js",
    "revision": "6853b105a973c9ab9d43289041231e67"
  },
  {
    "url": "assets/js/3.2a20f521.js",
    "revision": "4b6bfb8bbc59da1712058f95fcaca763"
  },
  {
    "url": "assets/js/4.0232ebe4.js",
    "revision": "b9c814b7157bcecef34ca8228d2505c1"
  },
  {
    "url": "assets/js/5.165f4b4b.js",
    "revision": "f6b74cca686ac89dbcab05f60ff7639d"
  },
  {
    "url": "assets/js/6.259987e9.js",
    "revision": "e1df2f917719506c59c15aa2379c0e52"
  },
  {
    "url": "assets/js/7.a750f11f.js",
    "revision": "ef47c2cfe798ad70db440bf7742f25da"
  },
  {
    "url": "assets/js/8.06ebc069.js",
    "revision": "5a33819692bf892ffa75dfd827c4a600"
  },
  {
    "url": "assets/js/9.df188a96.js",
    "revision": "b09cdd2f46a0f9f26659dd156304eae8"
  },
  {
    "url": "assets/js/app.a3450c38.js",
    "revision": "1e9f8b7d4ecb11bde30159e4e01b0e3b"
  },
  {
    "url": "components/blockquote.html",
    "revision": "3cfdfb320879519d43ddf7f1a7729211"
  },
  {
    "url": "components/button.html",
    "revision": "0634db9a457670b11bfc87d09e77991e"
  },
  {
    "url": "components/checkbox.html",
    "revision": "f663e70205db4c5719b913f0872ee827"
  },
  {
    "url": "components/figure.html",
    "revision": "11e745124ab7a858b0945944691547e8"
  },
  {
    "url": "components/hr.html",
    "revision": "595e18e978d2268f16b4add882ca846f"
  },
  {
    "url": "components/input.html",
    "revision": "e2bbf3beb164fabf3cb5d077e52f7885"
  },
  {
    "url": "hero.png",
    "revision": "ab614432cf37e9263eb0afd85d75fbf5"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "25b1a3e64ef02d62bb8d5e7bd93418ea"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "3331b884e104dea9bf00503f216aff98"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "3c696d67bdfe7a5bd1940b956dedd30a"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "7710938a1b8c20b4a2d6bab363bd3cd5"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "dd73dd83444767708afe579c0ad2d53b"
  },
  {
    "url": "icons/mstile-144x144.png",
    "revision": "0fe25867d2ceed671f96968d532a9cee"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "959131ca389738ae81b7d0af73b4280f"
  },
  {
    "url": "icons/mstile-310x150.png",
    "revision": "a0efb1575031edf4a39f83b126710ceb"
  },
  {
    "url": "icons/mstile-310x310.png",
    "revision": "182b12c9bbea0d02f3fb11bf08e2fe22"
  },
  {
    "url": "icons/mstile-70x70.png",
    "revision": "4acd7d952077d458432251de71cdf75f"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "c6112350f9f5424dbd140ff43a32ff68"
  },
  {
    "url": "index.html",
    "revision": "5ebd77e3a08daa8c8a4772bbeb92cebb"
  },
  {
    "url": "introduction/getting-started.html",
    "revision": "146a887cfb3316a8b22e4b07ce5c67fc"
  },
  {
    "url": "logo.png",
    "revision": "dd73dd83444767708afe579c0ad2d53b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
