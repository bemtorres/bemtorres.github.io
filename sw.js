var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  '/css/bootstrap.min.css',
  '/css/one-page-wonder.css',
  '/js/app.js',
  '/img/01.jpg',
  '/img/02.jpg',
  '/img/03.jpg',
  'https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900',
  'https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Cache open!');
        return cache.addAll(urlsToCache);
      })
  );
});


self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            // Cache hit - return response
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});

// self.addEventListener('activate', event => {
//     // remove old caches
//     event.waitUntil(
//       caches.keys().then(keys => Promise.all(
//         keys.map(key => {
//           if (key != CACHE_NAME) {
//             return caches.delete(key);
//           }
//         })
//       )).then(() => {
//         console.log('Now ready to handle fetches!');
//       })
//     );
// });


