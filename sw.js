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
    "url": "index.html",
    "revision": "85a9fc411bb333388963be381ca5e745"
  },
  {
    "url": "life-buoy.4f62e248.png",
    "revision": "08bb4fda6004ca86f87dffbaafeb137f"
  },
  {
    "url": "manifest.89e91535.js",
    "revision": "19b9571cc127c3f5a3a0a5c387b6da94"
  },
  {
    "url": "src.65f6e68f.js",
    "revision": "37640c0be20df97203934d74b6e9153b"
  },
  {
    "url": "src.a673c138.css",
    "revision": "137c53bae655b7f836653caff9e9ee25"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
