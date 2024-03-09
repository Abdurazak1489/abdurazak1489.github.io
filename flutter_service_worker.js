'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "4a11e73ddc16e901e5f25d55a1685205",
".git/config": "3495fe51306208202ecd89a730793a92",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6aba3c8ed96e2bf86fb4481cc85fa0a7",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "21b3cc474b3836b6631f98c420aa8e7e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e2b3fd8b183c06212f83dfe50f611cb8",
".git/logs/refs/heads/main": "9e05dfef1fd2915f91fa6d50365695a8",
".git/logs/refs/remotes/origin/main": "83874e604b9786503af8e04c4fa8faa7",
".git/objects/00/501bd3f61dd90cddb477b80c4108a710100c38": "b6ed86b1de388de758617588fe66eb42",
".git/objects/04/e1507d014f45e1857114d8b8954ffc71203e23": "f894e82dea73a950be76e004e2f7675d",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/08/69b8b9abf30e50d0bb6bb8eda981acb063da78": "6d6384da4cb6f85b0ceeb71931b0dab2",
".git/objects/08/73c1fd37b543704d31de1db423fee3f28377d6": "b7742905fb5924a0f806ea4d277d1183",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/11/af6af0b95dacadedfaee8afc0f396358d45b65": "fc533bb6ead97a538351afbc0d543bac",
".git/objects/14/8ab282bd72db44cf6e20ea818281c9d3b5808e": "3a8948ba70b0989e91ef910e2b7796aa",
".git/objects/1f/6d9888d33c0050c3f8a19baafd17a46d5bcb5d": "89c9e1c4382387b3dab9295bd5df9e3b",
".git/objects/1f/8ee95332018fdad4eb8558b81b4ee9bc529d81": "537e92d0e291a33d2c9f009c578c3452",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/2a/15f14424f7d473bc67b690cb789182e0734340": "cff8f048d9a3e2f99a8a8ddaabb2d40d",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2b/ec0488f461dd17a2f750dccb5615d3cc495c33": "c1e779a2b0def46324f49aa04c91a4a7",
".git/objects/32/6c2a272a7309fec4719b25af6a117e1ea220b1": "3b693ac5ba8dceb7df874089e9e6f113",
".git/objects/33/4c68fcf0fb9fe8c767d02782ff346c60a268a7": "2e9427a322a126d19a48f56f337439ef",
".git/objects/35/e0287522cfc5a310d753af8f8df6ed5f7988cc": "7622fb97a6840482c3e8ef18b061e9d1",
".git/objects/37/16ee12007bbc262155b934a145a3f30bda8a66": "18ca0eb58f6693d30c63d2da0f2c7cfa",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3e/70aed8c6dc524ec03954a9a6c1281270e2dcf8": "2b44d65fe402a65c3a307b14300e9535",
".git/objects/42/b43ffc661644fccd8777f7223c1fd054205cdb": "7cf64ab19031dc9afa68d8b44bd89acd",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4d/6d26937a58168fb4139fd9636ca0c8c623e78a": "087142b14b0dbc23711b33f4e879c828",
".git/objects/53/c63b06e86275e028c234740956adf98c820a85": "7a696e9888a868538925cac7c1ca6013",
".git/objects/5b/11da419a44334ed8cee10da6fb6f2b2d08b513": "6ae29e4a389b4d30c8ee2703c9739554",
".git/objects/60/86446776a5581380822e9378f6ac74776dbcf8": "b38fa988db9bce921b2ca4c424248859",
".git/objects/67/2f4f4a0e948abc8d864b811e928c43a18d9904": "367cb432480b7418a447b6e9997fcb67",
".git/objects/69/ab3574d979b06bc06e6b6c67ba14efc8516082": "ab352f588858905b542cb22c14268a00",
".git/objects/7f/6f45aa10e17206223b74d332d8d93839e87112": "4d1459ee78a781c73dd5bff2357e03a0",
".git/objects/81/3d53cca166c13639f32d52f46554e3f8a68321": "68f11144de411922c12d4677876a8f8e",
".git/objects/81/bf6f01de04328a671b981dc3b4f8877a49b825": "c69c1f179de23106d38fc3782f38bc04",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/e314daf4b619887f2a93000e5df1a37ce989d8": "e6a9fc3384d595cc4c842b0f49ffc391",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/95/9385c9ef203f7957792cfb0d666f4c981c345c": "dca64bb6390a6dddcc1c57f20204efa9",
".git/objects/97/be0c4b0242f38c9d8fc51254deea1813376288": "9107fbe274464ac5acbbb074162670be",
".git/objects/9a/a71a6e688720c9e590b95bfe99960b33abaa5b": "f07a244aee79f4172221ec6a544ea50c",
".git/objects/9d/45ee43a434ad9351eb6c973a80656f47879465": "94c09a7285516468a9a5a2d71dc0df79",
".git/objects/9f/6016659f4a7123c3f768cf24c2ac0fc7dd1e32": "7c00d32fe623d693447519050ff0707b",
".git/objects/a1/b75f97788f04aff6545de5f1b2b3c15110d23a": "12b2733dee061dc25f002cd1a476efe5",
".git/objects/a5/953a4ac6dfadce74d8b9d60046e7a99e0cce7e": "bd5a6d5c9b0a1004d69c9723cfb544cd",
".git/objects/a6/90c1f5bf4d7943c45e7380d8553037cad87e92": "b94cb898040fd9b87dec7aa1250e0867",
".git/objects/aa/2fe9b4a3e69f5d110b49b886bccf2998f101a6": "b5ce766f5309e4f8bb3f8c2ecb6ee5c4",
".git/objects/ad/9a0ce0a7b6bb140195dd3ea80ecfa5c2aff9be": "3e1f1502bbbedc3c348bbc7b5d80b4a9",
".git/objects/b3/18a6cf3b7de649a28cb2f98130d6b7be0e4c4f": "f421f66d1d9936eb92876d005d3bbac9",
".git/objects/b3/d770c64310d64c68c4b209fa9f8c3d0c88537b": "867e0a26576e66bb3f452b16916ba938",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/be/ed157db4cd78e5f36d7cf6bccf9bc7824be7f7": "30717940fbc6be8e432f3df6a7bd8629",
".git/objects/ce/c59aec6e142d665ce8b7db3b16854c533cacac": "cc961668999dc751c097d63da38abe14",
".git/objects/d3/69478ed174f02ce80ed9fb9b9f19371cbbe322": "4d8c7c09c385f2e37ed8286b64b0a5e9",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/c981bc3b64cad661ae245c2c2656c9b900d17e": "afee832787b4ca6d1074ebaca6a0ea93",
".git/objects/dd/3f776772a538a05c41f97bc4d750ac4434e942": "139c322dbc24fc6865543f7e2dd487df",
".git/objects/de/9267ad9b3a52c2b62d7590225beffe3d9ec94a": "175537b18b8bc6355eb7879863754dd1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/51152131f6c76b25891f9fa8fb1e417822bf78": "22d01bac44fabc2d83bf2c1d3650ceea",
".git/objects/f5/73639605f352d9bf028d473eaf38f9c4fe793a": "3a3491efa46b8229b2eff463f9f26309",
".git/objects/f6/c086b6e9de273b8a0865e2aec4eaf73f555dbd": "abd5f5dcab84fe6e826ed7f75065f04c",
".git/objects/fa/666a7e6e16148cb59746540256b37a5037fdb0": "f945fe4ab461ce3202319ce8530548ab",
".git/objects/fb/7757817f5464aa0c6aac24d96945542525042f": "20440bf91c2bcce7c2e6cba310dc7dbe",
".git/ORIG_HEAD": "c5749506d2059578129abb291e5e6f39",
".git/refs/heads/main": "c5749506d2059578129abb291e5e6f39",
".git/refs/remotes/origin/main": "c5749506d2059578129abb291e5e6f39",
"assets/AssetManifest.bin": "bda69b2d94259a62c8374769b8373c49",
"assets/AssetManifest.bin.json": "1f17fcf8fa0f6e563df96725fec3c72e",
"assets/AssetManifest.json": "491f300584ee76691ac1f791d93d4b8e",
"assets/assets/logo.png": "419ad35dc9a8132f4ea6e7757eb24419",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "903695f709b7b8f1a29e90ac4d9ba9cd",
"assets/NOTICES": "b03281761483aece2c117ec2fee0da11",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "62986d9d622bd649b9441667113dbf6b",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/android-chrome-192x192.png": "95566024253a3facefde573692effac0",
"icons/android-chrome-512x512.png": "81b45ce5963104d88c93d7017dc57194",
"icons/apple-touch-icon.png": "62a6502b4c4f6ab349a1add1f0d9e288",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4fbc470047526d38ec662b8870a97d89",
"/": "4fbc470047526d38ec662b8870a97d89",
"logo.png": "419ad35dc9a8132f4ea6e7757eb24419",
"logo1.png": "b651053cc0449b185fa4854c0774da97",
"main.dart.js": "30865ebcde1835903d8a16f8cdde878f",
"manifest.json": "68375f169312655c3d13d7858e980c46",
"monb.png": "bca00b0bb3594874bc3b16613bb53dbd",
"version.json": "403fab6a343d6aa39326f49a098a903a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
