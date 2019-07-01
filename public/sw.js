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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "apple-touch-icon.png",
    "revision": "dd147f18772924e396826747d95990e9"
  },
  {
    "url": "bundle.css",
    "revision": "0f1d3de00619b1b39b35e33c39899383"
  },
  {
    "url": "bundle.js",
    "revision": "55758cdbbf00c34397670974851302e2"
  },
  {
    "url": "favicon.png",
    "revision": "dd147f18772924e396826747d95990e9"
  },
  {
    "url": "global.css",
    "revision": "26ddecfe691c0b6df69922f3d4e95a4d"
  },
  {
    "url": "index.html",
    "revision": "1c10c59dda782e92734d8f6886a950c0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg)$/, workbox.strategies.cacheFirst({ "cacheName":"images", plugins: [] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/(www.)?amcharts.com\/lib\/3/, workbox.strategies.cacheFirst({ "cacheName":"map", plugins: [] }), 'GET');
