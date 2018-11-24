var CACHE_NAME = 'bem-cache-v3';
var urlsToCache = [
  '/',
  '/dist/img/avatar/avatar-1.jpg',
  '/dist/modules/bootstrap/css/bootstrap.min.css',
  '/dist/modules/ionicons/css/ionicons.min.css',
  '/dist/modules/fontawesome/web-fonts-with-css/css/fontawesome-all.min.css',
  '/dist/modules/summernote/summernote-lite.css',
  '/dist/css/demo.css',
  '/dist/css/style.css',
  '/dist/css/custom.css',
  '/dist/css/skins/darksidebar.css',
  '/dist/modules/jquery.min.js',
  '/dist/modules/popper.js',
  '/dist/modules/tooltip.js',
  '/dist/modules/bootstrap/js/bootstrap.min.js',
  '/dist/modules/nicescroll/jquery.nicescroll.min.js',
  '/dist/modules/scroll-up-bar/dist/scroll-up-bar.min.js',
  '/dist/js/sa-functions.js',
  '/dist/modules/summernote/summernote-lite.js',
  '/idist/js/scripts.js',  
  '/dist/js/custom.j',
  '/dist/img/news/img01.jpg',
  '/dist/img/news/img07.jpg',  
  '/dist/img/news/img08.jpg',
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

/*

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
}); */

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // IMPORTANT: Clone the request. A request is a stream and
        // can only be consumed once. Since we are consuming this
        // once by cache and once by the browser for fetch, we need
        // to clone the response.
        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});

 self.addEventListener('activate', event => {
     // remove old caches

     //  var cacheWhitelist = ['pages-cache-v1', 'blog-posts-cache-v1'];

     event.waitUntil(
       caches.keys().then(keys => Promise.all(
         keys.map(key => {
           if (key != CACHE_NAME) {
             return caches.delete(key);
           }
         })
       )).then(() => {
         console.log('Now ready to handle fetches!');
       })
     );
 });