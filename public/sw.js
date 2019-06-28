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
    "url": "bundle.css",
    "revision": "0f1d3de00619b1b39b35e33c39899383"
  },
  {
    "url": "bundle.js",
    "revision": "e6b48d2057330d59e622b533a9583a80"
  },
  {
    "url": "favicon.png",
    "revision": "c64beab291de80970aa4887a5a1c9135"
  },
  {
    "url": "global.css",
    "revision": "e2958002ce69963a65e785dbb6b12562"
  },
  {
    "url": "index.html",
    "revision": "2bd9603a51218179e1361cc3691a7762"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg)$/, workbox.strategies.cacheFirst({ "cacheName":"images", plugins: [] }), 'GET');
