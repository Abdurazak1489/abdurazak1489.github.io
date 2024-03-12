'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6965c41d68c4a3d8f25d154dacefa2e1",
"assets/AssetManifest.bin.json": "1c290fbfc48d4fe3486c375658f4937a",
"assets/AssetManifest.json": "1ce866e2d475904edcb8cd49cf681759",
"assets/assets/acqua_text_out_of_band.riv": "2d279c05e13910efb3589f7deb7e0a0e",
"assets/assets/birb.riv": "ff136032087d57d5faed82a4e11f1a69",
"assets/assets/coyote.riv": "4133cacab231790eca0aae9d868ac627",
"assets/assets/embedded_text.riv": "de3b84a8ad76bfeae3b9f9e1039bb7ca",
"assets/assets/event_sounds.riv": "c51bd14034a9c46819c94317e306f41c",
"assets/assets/fonts/Inter-Regular.ttf": "1c0788fb0963734d2aa198e8cfc2f76c",
"assets/assets/hit_test_consume.riv": "df3678f791db261f9e1139bf5e90942f",
"assets/assets/image_out_of_band.riv": "c5763be9ee65d1b35cf0fb50ad0e5f52",
"assets/assets/light_switch.riv": "bc9cfd00fe9194f1d33d284803d67a6f",
"assets/assets/liquid_download.riv": "759e9a34b5a0981bad2c4af369491332",
"assets/assets/little_machine.riv": "193f95c91f3d0c38b27e25ff1b71b6ef",
"assets/assets/logo.png": "419ad35dc9a8132f4ea6e7757eb24419",
"assets/assets/logo1.png": "bca00b0bb3594874bc3b16613bb53dbd",
"assets/assets/off_road_car.riv": "ed576aa0dda582ecf3a7a311b80415c6",
"assets/assets/rating_animation.riv": "886dc3a57e30720a1439a74f5d9f9c6c",
"assets/assets/rocket.riv": "57ff619ec37fbd18141544c1b55bc6a5",
"assets/assets/skills.riv": "ef57c58346dcd084eebbc777ccbd0c53",
"assets/assets/skins_demo.riv": "230eda2f04843ad400b58c4ead290d4a",
"assets/assets/solo_test.riv": "168314d0dbb17b5aa96a79ade26e3011",
"assets/assets/step.mp3": "466e14a3f064f31342c8dc13b18829dd",
"assets/assets/teeny_tiny.riv": "b7e94df3e11ee11f6f287df4cf154b69",
"assets/assets/text_flutter.riv": "9ccc06c5b274e95806602f749088db48",
"assets/assets/trans_text.riv": "6627009a58d0eaea9e6f58fa9bad483b",
"assets/assets/url_event_button.riv": "7506b1d4c85edbc7febc1309e0d28fb0",
"assets/assets/vehicles.riv": "1a1871ed122ad22ccea3ef67f7bcc943",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "cc82282adecd000d31e1ee563f91469c",
"assets/NOTICES": "ff900bec49d2a3fd7eccc01d3b683c50",
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
"index.html": "cbdba81915bdbbc8e896f5b220f29c2f",
"/": "cbdba81915bdbbc8e896f5b220f29c2f",
"logo.png": "419ad35dc9a8132f4ea6e7757eb24419",
"logo1.png": "b651053cc0449b185fa4854c0774da97",
"main.dart.js": "084353dab193495e0311ef1987e6278e",
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
