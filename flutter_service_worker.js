'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "d6f3a425b76404804db014bfee3ccc68",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "89c17d18bfcd802bebc2a79962c18787",
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
".git/index": "26c351362d3878ee0d3013c8f9b1cb50",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f83ec83b7f744161dec5d02ba2118e91",
".git/logs/refs/heads/main": "a156f966f73a880930a2c7d2af3e8412",
".git/logs/refs/remotes/origin/main": "70b5976b34f54bb6dfcfc105bd82e09a",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0c/9533fb88272708cb955cc6fa436a0891a73522": "61b27bae1e697e6df3a7174e796efe99",
".git/objects/1a/045c2c55670e805b2fba378108a3f325845439": "05d43d3d49fad3db5f4dead740bd2481",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1d/9b06a48b88ae06e71a53e7cbee5a910c0e720e": "b72ab866a649434465bee33c4662d1a7",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/5c590149857d2f822dee0d077eaf23ee75cfb6": "6c7600d4bdc85ccf42a4cf1ef276db2c",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/2a/b46f9f20fac5d1b4aefafbaf5941457785ee59": "20557394d64d9e4cdb9a2de8b9f79ca3",
".git/objects/30/bc837a6918f51e1639f040af409d3b0de0cce2": "bccda7475fa3dc373571fdbf701e7f96",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/42/9d0d2b705ae8b23f11de63b0312fbdd9be8ba6": "a14551fcd7f986785475c0222aaf38b9",
".git/objects/42/bd81a3794ac1397d9ea0bff3733aef3bc578a8": "7df42fd11a5d47f9708aa157f4543b02",
".git/objects/45/c65932a7450f1bc9a5f22bf11ecd70ea334c38": "80c332ad1b76c2d46da250e2a95e9c02",
".git/objects/46/be4f255ec5c906c609c0cee35f1e9dd26e44b5": "fc16884a1e9eb9802eaab95108efb91b",
".git/objects/48/b9b7c5ebbd850f3aba087d8206c1fc496539ad": "5afc5a1f3ca7660240afc95d67a63998",
".git/objects/4a/ffcfc653da7b491757f5a337a5719046a52622": "34e7d645c46bcbd296f3e107ae521dd3",
".git/objects/4b/c3d6d6323e10a427c1eab5838c2bf65eb2fa05": "13d2f5fe11c5b0b82c4da4d562f486ef",
".git/objects/50/fe411c53e25ff6ca5ebe52f2ea5e2301c846d0": "7ae3ecfd9ae8730db5a2e6492526802b",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/52/e111687bdc715cc7ad266872b14b4674b290b4": "4d8d9af69c06f79b70ee93e5aa1573f8",
".git/objects/58/13de57e5cc9521dec7b7a6df8f37f8470952c3": "25b79e6bcdaf72f550b8c7762017dbd7",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/65/e74bba137cd268fc3dd1c95ba9e2477c193f68": "fda32ef94c8975406a9417a671048bd1",
".git/objects/6c/2939682481a5876151b4c29fa669ea1875983f": "b0ed8d8db0e58b88070836d31237ec30",
".git/objects/6c/8796f80e75d8a29f7848c9ac1a1d3b9d6def47": "baf7c6de3c4631e13409128a0d22543f",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/70/3d3a75e70dce49e9e2952ed6fe8ac9a03050ce": "4e1c46643c0eefea77fbe9d341c09e41",
".git/objects/76/a1a33327591624d19ece6a7fbcf183398e3646": "fdd79916242ef0fe7c3bda5b73f8bc8b",
".git/objects/7c/0b401a0ecdc8cd31bf77fb6128923cf8ef7203": "e22e679527699de4d2954a27b6162568",
".git/objects/7c/86b8e3ddc92222edbd5e7b6fc31e5c39f3c03c": "6457fa29fe54a52e7775f771a839f629",
".git/objects/85/657f4a65e9b83b09bf3a97a9427843f071dab9": "95bb9b8baf5b91bf64b3b8e912d147f0",
".git/objects/85/ea52df5ee01738a330a337d63edfe99423dce4": "71cc4b4ab2210f01a71195feef6e0618",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/9d929d270ddc308b483d1f6fe42dc4f40a3c7d": "fc08e4cc7a6c836908eaee9f91dcf198",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/94/764606d289cf60cb5f6beaba78381170dfb701": "6fd6645bed99b073e93d1a921f57b46f",
".git/objects/97/0fd4d3fdd281c6e9cbaf73e3c228e5bf28c6c1": "c38471d3727f690b06e5edeac2c2a50d",
".git/objects/a9/f5a8fabe07f3c1ea76e9657150aa7cd6066f67": "03b6dd639a6df32716ae2f89c1003f79",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/abd58dd0cdec87899e14cd1af1ae85ecb04ddd": "d29e7f11eacdb5808fe0b5f3ec6f261a",
".git/objects/b8/9a4acb02888322f2fb2037f9fa692ffd3ebe03": "5380bbd82394ecaab363567e13e9cd3d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/111ce0c4ac08129e48e3d22daacc9530f349e9": "29197a4e9386c6fb8e36fd732fda962c",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bd/3cc9711533de5f65174d2f4990490e8991ae6f": "3ec7ebcd73910afce9210c2597d5a0a4",
".git/objects/c3/070ac8c9aa58dc6f1aa505998cf9f899b988b3": "9cbbfb5b37a68f2013c2738c2f254f49",
".git/objects/c6/d91be71f6ee722b11fcffa463275269074af35": "251986e63d492d52bc2c6d8032f4a800",
".git/objects/d0/efe973ff2f67d932f9578da27c66cef9dfbaae": "fe17ca77b17387815efbaa53cf7b323b",
".git/objects/d1/2979b037d8bae88b9a5c5fbfa0337ea1248172": "9f2dceeea4d72a1e120a300fa028a53d",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e4/e2d685ba2073813f38f088d5de41d3ae89c815": "b8fabb4a42e8c91b2d0082df6993851d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f7/fb39dbd8657820579fe94a9cbd3d31a1aa5630": "eec82ebff065d70b10b4ddad1b9a24cf",
".git/objects/fc/44bda8a47604d2b320bdba0f39d1e6bbd47e74": "48b9701d337257fe8a98eb0647814899",
".git/refs/heads/main": "6bfba7ee6fdf5d1359de62b4d11e6bad",
".git/refs/remotes/origin/main": "6bfba7ee6fdf5d1359de62b4d11e6bad",
"assets/AssetManifest.bin": "26cd047cb992c5f16459ba9800098f08",
"assets/AssetManifest.json": "94d8c966390d4cfc75255d0d548865bd",
"assets/assets/icons/bubbles.svg": "0e0a5f380e73c24c9bd0a7d08ba0906b",
"assets/assets/icons/car.png": "58973d7ca887ce55fdf304a0af024322",
"assets/assets/icons/car2.png": "f908c499f35d95fd30ce9dcf088fdfe5",
"assets/assets/icons/car3.png": "9a4944f04e7967e0edd4f028656a475e",
"assets/assets/icons/car4.png": "999a067b37f7663de12287d5e9d1eb6d",
"assets/assets/icons/close.svg": "cb9e759ee55687836e9c1f20480dd9c8",
"assets/assets/icons/fail.svg": "abc502b0a7bf3b2ca90305859f17f660",
"assets/assets/icons/logoFince.png": "d59d15aa6ee51ab372659f6dbdeb7d73",
"assets/assets/images/chevrolet_onix.jpg": "07987c1ca4a0ecf6e23c93d34e2a7889",
"assets/assets/images/DFSK_Glory_580.png": "cdb0833a5528a8cf065524e7994990ab",
"assets/assets/images/Geely_GX3.png": "c00d794548603e3b6b6d9f7b4ed4299c",
"assets/assets/images/Hyundai_Grand_i10.png": "5707b5a14469146ab2146e9b7689ac71",
"assets/assets/images/kia_picanto.jpg": "b197dbeb90642c39c26f286391aadee9",
"assets/assets/images/kia_soluto.png": "4de71a0dbef8d617fecb01bee098c47a",
"assets/assets/images/toyota_etios.jpg": "4b48f1b1a16ce5c6c021458667b58b53",
"assets/assets/images/toyota_hilux.png": "4564b38a274fad6b0164bab80f33fd55",
"assets/assets/images/toyota_rush.jpg": "08c69ecdcf0dd2e9104c8c407e3aec18",
"assets/assets/images/toyota_yaris.png": "c8e67f37870a1cba78703cbf9227a630",
"assets/FontManifest.json": "1a6184c6ca656e8be25d25329c87e502",
"assets/fonts/MaterialIcons-Regular.otf": "074b5237dbe4234d040ef3907a8640ca",
"assets/NOTICES": "3a7f94930c5ab621e8db3b77aa48e6dc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/feather_icons/fonts/feather.ttf": "b5f4566bdaa6dfa10fad3bedb22f7ecf",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ea6fbd2a846a55575ab3901573cded34",
"/": "ea6fbd2a846a55575ab3901573cded34",
"main.dart.js": "cb33623c43b2867b936bb42dbde2d6df",
"manifest.json": "f9d629bf510699968876b43163e68bc1",
"version.json": "7039c434ca883669f41ef91dafe2713f"};
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
