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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "ed68fa79dfb2a3069aba4e7ac96d2f99"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.395ad074.css",
    "revision": "34bd783151fd73028ac29776f8f03984"
  },
  {
    "url": "assets/img/delete.4e71afc7.png",
    "revision": "4e71afc7e6611bec3e5a2e71fd6316e2"
  },
  {
    "url": "assets/img/Get_all.a4864aa9.png",
    "revision": "a4864aa9abd4bc451c35435041b9623e"
  },
  {
    "url": "assets/img/Get_delete.7421cdd8.png",
    "revision": "7421cdd8bf1f2111fa6f994033ef82ad"
  },
  {
    "url": "assets/img/get_id.fcb00bec.png",
    "revision": "fcb00bec86f48608bf3ff7d927cfc224"
  },
  {
    "url": "assets/img/Get_patch.dab6e0d3.png",
    "revision": "dab6e0d3c3d6e1052b71add15c69cce2"
  },
  {
    "url": "assets/img/Get_post.654c60fb.png",
    "revision": "654c60fb10f74df6dd0fdb8d5082927a"
  },
  {
    "url": "assets/img/Get_put.d9cf1ec1.png",
    "revision": "d9cf1ec1233fb53ec5794cf5cbb1d2f5"
  },
  {
    "url": "assets/img/patch.a8c5779f.png",
    "revision": "a8c5779f9156f9c821d06c238a76500b"
  },
  {
    "url": "assets/img/post.81ec0756.png",
    "revision": "81ec075628291528a6d0d0f974777d2f"
  },
  {
    "url": "assets/img/put.8d742e29.png",
    "revision": "8d742e29d4ba9d42855e173e2b9c5f3f"
  },
  {
    "url": "assets/img/relationscheme1.69673898.png",
    "revision": "69673898037fa1027fcbebfb4033053e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/start_server.53a6449b.png",
    "revision": "53a6449b1734c018f6d6ce6cb0f17e3c"
  },
  {
    "url": "assets/js/1.6105fe72.js",
    "revision": "85587a51ca11e790777bfc99adaa9b9d"
  },
  {
    "url": "assets/js/10.5fa8076c.js",
    "revision": "78be89402098926be772bab7751bd199"
  },
  {
    "url": "assets/js/13.80b19a0e.js",
    "revision": "5ca04a2e42167e5ddde9cceda72e7d36"
  },
  {
    "url": "assets/js/14.43a7b754.js",
    "revision": "e850d0766babd121dd37b05ad50d49ef"
  },
  {
    "url": "assets/js/15.9ada760f.js",
    "revision": "7126e94a2caf9448589a5ba5b3c26f33"
  },
  {
    "url": "assets/js/16.da4533e4.js",
    "revision": "f7454916ebb4d8b09709244eea4a1b59"
  },
  {
    "url": "assets/js/17.6146c363.js",
    "revision": "7357aa4c64ee2c7f585ecc708d5dfbc7"
  },
  {
    "url": "assets/js/18.59921fba.js",
    "revision": "0f8fcc5459702246f890a0e38ffafda6"
  },
  {
    "url": "assets/js/19.b3fcf576.js",
    "revision": "324990ca660d7ed766a310931c2b5664"
  },
  {
    "url": "assets/js/2.708c42ab.js",
    "revision": "4c851c71b19590274720132910fd86d5"
  },
  {
    "url": "assets/js/20.ca029f57.js",
    "revision": "8b50da2bb419527e86b3dd44258229c2"
  },
  {
    "url": "assets/js/21.580b3db8.js",
    "revision": "8b7c9b61e56f99d768ff23d21e9d935d"
  },
  {
    "url": "assets/js/22.3b8eb9fa.js",
    "revision": "9f6e9904ba0cfa4dc7bc50e47142a6e3"
  },
  {
    "url": "assets/js/23.3ec6ef11.js",
    "revision": "d0e91598f11e346698d9855ebb1cde0b"
  },
  {
    "url": "assets/js/24.aaa9f179.js",
    "revision": "30def599bebca437fd4da161c4fd2f82"
  },
  {
    "url": "assets/js/25.f6d2044a.js",
    "revision": "2e9bc8583fc2d0dfe0e546a919f8359a"
  },
  {
    "url": "assets/js/26.a2bea33f.js",
    "revision": "dd10a9d7faa030ff1279ccf8d690c5bb"
  },
  {
    "url": "assets/js/27.419e4330.js",
    "revision": "1e2f9e99cd1e3925bf8b83a89b24c018"
  },
  {
    "url": "assets/js/28.c4bb0521.js",
    "revision": "0e67ae9e528c1786de51cb04a648ca3e"
  },
  {
    "url": "assets/js/29.cd61d8a6.js",
    "revision": "24591ff2410c79551419409f8f0edf9b"
  },
  {
    "url": "assets/js/3.fe685aea.js",
    "revision": "54c2d66a75926ab0b7e2caed46600a3e"
  },
  {
    "url": "assets/js/30.4f969f7d.js",
    "revision": "ec68eba4108c7e535538892cacaccd50"
  },
  {
    "url": "assets/js/31.01d61fd2.js",
    "revision": "8972e928c9741575777f36a5eb688b83"
  },
  {
    "url": "assets/js/32.3eb36a8c.js",
    "revision": "6fa69c57320ecf8391b7e6092660e5f9"
  },
  {
    "url": "assets/js/33.e196b89c.js",
    "revision": "74e3113e1327eac5a4b0a6f13c4d3e88"
  },
  {
    "url": "assets/js/34.a07094ea.js",
    "revision": "aa4996e9a61d3f507f38f1f03c02205b"
  },
  {
    "url": "assets/js/35.de8bbe3a.js",
    "revision": "085ff371ca5a916b9cbeb288ea7abb1d"
  },
  {
    "url": "assets/js/36.998d7878.js",
    "revision": "b6c0b94732665fe7dfb8e7c9f39e8fe9"
  },
  {
    "url": "assets/js/37.dc9c4276.js",
    "revision": "13d03897966ff16e4bb607eed32470f6"
  },
  {
    "url": "assets/js/38.b8cb5106.js",
    "revision": "e43cf19e3e247e299bc155afbbdefaaf"
  },
  {
    "url": "assets/js/39.d32c5788.js",
    "revision": "049544b262ed6bfe859981d2bdb70ed0"
  },
  {
    "url": "assets/js/4.6d59b340.js",
    "revision": "284066d1748cf2523f5d8e6501a587d5"
  },
  {
    "url": "assets/js/41.4e0ab024.js",
    "revision": "d02cbe52e2b448a182632ab16db7eb9d"
  },
  {
    "url": "assets/js/5.74345719.js",
    "revision": "63fdb96489c9ac546787d308853ee26d"
  },
  {
    "url": "assets/js/6.75d67937.js",
    "revision": "423995706c72f25e02a8867336a25607"
  },
  {
    "url": "assets/js/7.a9871538.js",
    "revision": "f5444807b829b69f3d6d220aea2efe44"
  },
  {
    "url": "assets/js/8.ca745063.js",
    "revision": "33cbfa245cc046de6678e415f1b9e34f"
  },
  {
    "url": "assets/js/9.27d0b2ae.js",
    "revision": "2dbc793b0725314105e923cdfac9e223"
  },
  {
    "url": "assets/js/app.39c665e8.js",
    "revision": "1f05acc195abf30370f1f05183f14e09"
  },
  {
    "url": "assets/js/vendors~docsearch.0c5eabf3.js",
    "revision": "5ad6dd201cf81df1e6040a4b4df3f99b"
  },
  {
    "url": "conclusion/index.html",
    "revision": "2f122b1002914e3edef40d515fb3adae"
  },
  {
    "url": "design/index.html",
    "revision": "2ca4fa3c21861894934018cf877b12ca"
  },
  {
    "url": "index.html",
    "revision": "fac347126a8e58c4bb376aa67641b74e"
  },
  {
    "url": "intro/index.html",
    "revision": "bfeb048345f6b1459736a73f6f5b53ee"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "c01addb0745c62cfe17d03941a98b95d"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "a4cb33c73311e0b0ee6a3c0ef0a1c709"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "d94889ed863f70abe7574a36caff0964"
  },
  {
    "url": "software/index.html",
    "revision": "baf3d15cbffcde64530f491a095268d0"
  },
  {
    "url": "test/index.html",
    "revision": "45617014ce4183423fd9d67e76845ffb"
  },
  {
    "url": "use cases/index.html",
    "revision": "f13e997dbd29f5ea96c4403c38d46b48"
  }
].concat(self.__precacheManifest || []);
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
