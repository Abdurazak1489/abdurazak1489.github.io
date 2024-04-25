'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7dc6b370765f115b6fe11291e0acc0f6",
"assets/AssetManifest.bin.json": "e6198794a1e632aa01c428cd43fdf325",
"assets/AssetManifest.json": "dd403299e4476ed7319c14bfc7c57966",
"assets/assets/acqua_text_out_of_band.riv": "2d279c05e13910efb3589f7deb7e0a0e",
"assets/assets/birb.riv": "ff136032087d57d5faed82a4e11f1a69",
"assets/assets/coyote.riv": "4133cacab231790eca0aae9d868ac627",
"assets/assets/embedded_text.riv": "de3b84a8ad76bfeae3b9f9e1039bb7ca",
"assets/assets/event_sounds.riv": "c51bd14034a9c46819c94317e306f41c",
"assets/assets/hit_test_consume.riv": "df3678f791db261f9e1139bf5e90942f",
"assets/assets/images/rogue_shooter/bullet.png": "8eca41372586b4d2446c22bee1fe77f2",
"assets/assets/images/rogue_shooter/enemy.png": "8dfb2f04967b1156a257c05f282ff8c6",
"assets/assets/images/rogue_shooter/explosion.png": "81a3691935a18a30572870b759ad1683",
"assets/assets/images/rogue_shooter/player.png": "4e31815075ec7e496a099af35c2997ed",
"assets/assets/images/rogue_shooter/stars.png": "839baa9b3605e008cb4008d3be7f048a",
"assets/assets/images/trex.png": "1876fad2b35fa1f8e5c7c0f0e3f476cc",
"assets/assets/image_out_of_band.riv": "c5763be9ee65d1b35cf0fb50ad0e5f52",
"assets/assets/light_switch.riv": "bc9cfd00fe9194f1d33d284803d67a6f",
"assets/assets/liquid_download.riv": "759e9a34b5a0981bad2c4af369491332",
"assets/assets/little_machine.riv": "193f95c91f3d0c38b27e25ff1b71b6ef",
"assets/assets/logo.png": "419ad35dc9a8132f4ea6e7757eb24419",
"assets/assets/off_road_car.riv": "ed576aa0dda582ecf3a7a311b80415c6",
"assets/assets/rating_animation.riv": "886dc3a57e30720a1439a74f5d9f9c6c",
"assets/assets/rocket.riv": "57ff619ec37fbd18141544c1b55bc6a5",
"assets/assets/skills.riv": "ef57c58346dcd084eebbc777ccbd0c53",
"assets/assets/skins_demo.riv": "230eda2f04843ad400b58c4ead290d4a",
"assets/assets/solo_test.riv": "168314d0dbb17b5aa96a79ade26e3011",
"assets/assets/step.mp3": "466e14a3f064f31342c8dc13b18829dd",
"assets/assets/svgs/add1.svg": "a1df90c1b08c34b411f2b716c91301ab",
"assets/assets/svgs/comment.svg": "cf80eecb233964f1fc7cf5b475445ca3",
"assets/assets/svgs/emoji.svg": "a0d2ebf76c584410d50792596eb2f7c4",
"assets/assets/svgs/gallery.svg": "1f26e161e72adc1735bc67cc64fdcf79",
"assets/assets/svgs/gif.svg": "153d1b00210a58476f248126e89557ef",
"assets/assets/svgs/home_filled.svg": "e9904a945c33fbbf54d0b64f1afa9872",
"assets/assets/svgs/home_outlined.svg": "87b47edcec20ee9a8af5a45c9213770a",
"assets/assets/svgs/like_filled.svg": "42603825b7961ba7d0d636bc6508772d",
"assets/assets/svgs/like_outlined.svg": "c2e75bbc8cb36ce3825c7e19ddd82a14",
"assets/assets/svgs/notif_filled.svg": "aabd7e7588e8b9f40335265ceecf119b",
"assets/assets/svgs/notif_outlined.svg": "3eaf5384803b12057170656476ba0edc",
"assets/assets/svgs/retweet.svg": "ae94d33559ea3b58402b5996991d3da3",
"assets/assets/svgs/search.svg": "9a74d4f1232b70b128752bc3a882f5d6",
"assets/assets/svgs/twitter_logo.svg": "53b8d0289291ff6f8d27f58917ecc3d7",
"assets/assets/svgs/verified.svg": "e8226077e5fe5621f4db611fe41dec55",
"assets/assets/svgs/views.svg": "36933cc7146e5b1037ef559a8b3a720a",
"assets/assets/teeny_tiny.riv": "b7e94df3e11ee11f6f287df4cf154b69",
"assets/assets/text_flutter.riv": "9ccc06c5b274e95806602f749088db48",
"assets/assets/trans_text.riv": "6627009a58d0eaea9e6f58fa9bad483b",
"assets/assets/url_event_button.riv": "7506b1d4c85edbc7febc1309e0d28fb0",
"assets/assets/vehicles.riv": "1a1871ed122ad22ccea3ef67f7bcc943",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "027b59f4f7e69c52ffd21ae0f3ed20c6",
"assets/NOTICES": "fc5387b9d1603be4d8986cf756dfa89e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/android-chrome-192x192.png": "95566024253a3facefde573692effac0",
"icons/android-chrome-512x512.png": "81b45ce5963104d88c93d7017dc57194",
"icons/apple-touch-icon.png": "62a6502b4c4f6ab349a1add1f0d9e288",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "90b5fe5dc5d7f64c9ec2df9e6c429f6e",
"/": "90b5fe5dc5d7f64c9ec2df9e6c429f6e",
"logo.png": "419ad35dc9a8132f4ea6e7757eb24419",
"logo1.png": "b651053cc0449b185fa4854c0774da97",
"main.dart.js": "d8e0a2a130dd7953a46a4f4b043c5394",
"manifest.json": "68375f169312655c3d13d7858e980c46",
"monb.png": "bca00b0bb3594874bc3b16613bb53dbd",
"version.json": "403fab6a343d6aa39326f49a098a903a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
