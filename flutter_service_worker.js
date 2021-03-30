'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "c16f5f8b450a1cff2a9542d79bd46ebf",
"index.html": "8aea5661bfdaf09ed7b9e0fe6dcb11d6",
"/": "8aea5661bfdaf09ed7b9e0fe6dcb11d6",
"main.dart.js": "85d94c83b3b66ef25a4b04b6775d9dfc",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "af80eb30d32da2dfe3df2df4f92722e1",
"assets/AssetManifest.json": "b650fa41ecd0d7d3c0f1d0434871bb16",
"assets/NOTICES": "9b81f3a9a44a2a172890b17b2cae567e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/the_smokey_collar.png": "8b5ae9216a6900aa4d6bd65dc3793840",
"assets/assets/the_geometric_bowl.png": "7e8f017505f572375bde2d27c9add2ce",
"assets/assets/the_mouse_rope_toy.png": "736989d0b3020ebd90d0578c16808497",
"assets/assets/the_brinjal_rope_toy.png": "a9b81288e0b31ae98273ac5c77d16567",
"assets/assets/the_fur_bulous_polo.png": "4abdd950600233fe3ed70eff5a186537",
"assets/assets/the_pupcorn_hoodie.png": "35d371e735f36bee43306df7ea650633",
"assets/assets/the_pawpstar_bowl.png": "cf5ffe9a42843eb86908f489dfc7ff5e",
"assets/assets/the_ultimutt_tee.png": "ce7851f1cdba44bcbd896913a42e6f50",
"assets/assets/the_swirly_collar.png": "1d07b7c1856b82b4dfe7e3320e1e6bcc",
"assets/assets/the_sky_leash.png": "8fb9ea85019300b3a1903350b565ae92",
"assets/assets/the_minion_collar.png": "448c6b734583a929d92a63158a42df51",
"assets/assets/the_pawrty_jacket.png": "501165b7d7c0e926f31f7a94fee78028",
"assets/assets/the_bark_side_collar.png": "9954c445e9e34c6e2508ffd599e80d4d",
"assets/assets/the_bumble_bee_harness.png": "844667de7db977988004321fdc4530ed",
"assets/assets/the_green_tee.png": "e581bdc94af1f930bb84c834d3dfba54",
"assets/assets/the_sunrise_lounger.png": "e1390ac37bd0e579f1c68af08e06342e",
"assets/assets/the_bear_rope_toy.png": "d30acf2f0cfa410cfb9cb93103542149",
"assets/assets/the_ocean_collar.png": "2ed09399a19fe20dabcd66a5357568e5",
"assets/assets/the_candy_bar_bed.png": "a5755a190b77f185c8ae062c85824e1d",
"assets/assets/the_pupparazzi_harness.png": "e72df1f1933349d0050c696ba85637a3",
"assets/assets/the_marble_leash.png": "ccd3a881b045a270dbbe54ac53593c83",
"assets/assets/the_foliage_lounger.png": "c5e0d7f1b84565824ccaf8a5d07afb7e",
"assets/assets/the_howloween_hoodie.png": "eb1f3297e4fca3e96ba14c771f056719",
"assets/assets/the_scarlet_lounger.png": "0edb4ea0da9103e5273b05b009df26f4",
"assets/assets/the_sunshine_bone_plushie.png": "528f0cb21e1547d9631a1a712c44e7cc",
"assets/assets/the_mango_bone_plushie.png": "c7bba9fcdb8ff2fd115137e643461d04",
"assets/assets/the_fur_bulous_collar.png": "edbe8ec7dcbe90e2ebe0b2b68b85275f",
"assets/assets/the_rope_chew_ball.png": "79cb3b4fe93995e3933262115e4d74b6",
"assets/assets/the_periwinkle_perfume_toy.png": "0dfb9eec4cfafb2e4758d9261e16cf64",
"assets/assets/the_bubbly_leash.png": "d81c86c5ab9a8fb03ae75d3c1f50eaa1",
"assets/assets/the_marble_collar.png": "fb976ac798a24b64adc5908d2c7a0584",
"assets/assets/the_red_leash.png": "194b53a63bc5af8353eabae07bd1a817",
"assets/assets/the_abstract_leash.png": "98b745c639c2fb71e2e83d0b0b9b4b62",
"assets/assets/the_cor_geous_hoodie.png": "2bc218315018ea06088b918479c249c8",
"assets/assets/the_octopaws_rope_toy.png": "5d88a02b7fbaf356c058e5b9cb23a3f5",
"assets/assets/the_pretty_collar.png": "87a539e7a79208792fe0c9ae5597f99f",
"assets/assets/the_minion_harness.png": "0fb70dd53782b2b873ef42974b43b470",
"assets/assets/the_twilight_lounger.png": "9edea49ea41b3d09767f2f2fe2f5cfbd",
"assets/assets/the_swirly_bowl.png": "748a270af843402827b5b967ba6c84b4",
"assets/assets/the_pug_life_jacket.png": "b5c1d180c3ee5a6cd7ea7ce1b96a9f55",
"assets/assets/the_ruff_polo.png": "3a6aa890046fbf17d5a0b4dc3257a42d",
"assets/assets/the_marine_lounger.png": "7a97db33e60e000af58542cbe431399c",
"assets/assets/the_saucer_bed.png": "74a9a539a85688c569e33a669afae69e",
"assets/assets/the_ladybird_harness.png": "2f056d992f59137c2446fdcfe9cfedc3",
"assets/assets/the_midnight_pawrty_bottle.png": "d8239f3dcaf028011a0e343888cb7052",
"assets/assets/the_cotton_candy_leash.png": "2c2b1f998086f591da83f19fea5c57e3",
"assets/assets/the_purple_pawrty_bottle.png": "2d19be3f38c36de23596daa64c79e9d5",
"assets/assets/the_abstract_collar.png": "86d201e7c2f5c18dafe40b4fa7dd784d",
"assets/assets/the_space_lounger.png": "0e30a56869bd8e4df2228e1c07ed3dbb",
"assets/assets/the_pup_chew_toy.png": "42b9787a1c5fc9b5170120f537e3a89c",
"assets/assets/the_pupkin_tee.png": "339c0d5755882b6ed40ccfd653bec695",
"assets/assets/the_pawpstar_co_leash.png": "619e31960ad993b4f2a5ba2212733a99",
"assets/assets/the_bubble_bowl.png": "f5cf7203379879b42f6e2e6ad203797d",
"assets/assets/the_grey_hoodie.png": "fb34db3b4e9d4ffd5660890ebc46897c",
"assets/assets/the_maple_collar.png": "416b691cd19790b55b2ec3466a47564a",
"assets/assets/the_aqua_lounger.png": "af4c684f55125c518f7675c2ec8dc95f",
"assets/assets/the_shoe_chew_toy.png": "ac87f76adf403296d51f1a2666602620",
"assets/assets/the_dumbbell_rope_toy.png": "ee02ce6d62ccb7b5fabe07970de1af7a",
"assets/assets/the_aqua_leash.png": "9a7598e2e316dac916a8fc3c7a887bc6",
"assets/assets/the_swirly_leash.png": "5c83e7c11c153eec6d8d7429f8121746",
"assets/assets/the_gangsta_hoodie.png": "6c8ac40e355e2b6320203356220e824f",
"assets/assets/the_airplane_chew_toy.png": "1ff09c4521f22898ca241e818670ae49",
"assets/assets/the_fries_chew_toy.png": "aa24857e2d261819a4d1ad97e30b783b",
"assets/assets/the_bubbly_collar.png": "471f33eef463d1954f2de6389510ad92",
"assets/assets/the_loop_rope_toy.png": "1a44da6feb8e57fd78967fc84a5ad4a5",
"assets/assets/the_pup_ular_polo.png": "2da793a7571daf17aef403f7337465e8",
"assets/assets/the_cotton_candy_perfume_toy.png": "30e253fa80d5c58f458451668b0b48dc",
"assets/assets/whatsapp.png": "3a8dad7f872542a95103cb9ca74dc415",
"assets/assets/the_blueberry_leash.png": "fc4490636ee3ee8d93bd71701b7d0698",
"assets/assets/the_boy_rope_toy.png": "dac2df3b8776fbcd95492cb6ae849a1f",
"assets/assets/the_tug_rope_toy.png": "f8337deae9f16b9ebd9319ba3435e4e7",
"assets/assets/the_fire_collar.png": "af171cfbeed4f6abf14ef36435fa4e6b",
"assets/assets/the_blaze_lounger.png": "3fbd8eab8d079a5705e85b3be682cdc6",
"assets/assets/the_peach_collar.png": "f1fe01ba858e3ee9874fb7a01fdc5da2",
"assets/assets/the_arc_bed.png": "d0b67d82ec44b18fe6646f62f666c07c",
"assets/assets/the_cat_rope_toy.png": "0c6372b2da49465a8718714157439b01",
"assets/assets/the_snow_leash.png": "f3dcc76e7877f81212745913ec066b46",
"assets/assets/the_purple_leash.png": "8f336dc09188d63892af968c51f07e30",
"assets/assets/the_pawsperity_jacket.png": "3936f1f48b88ec88a43f6edbcbb23f56"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
