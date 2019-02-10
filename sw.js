
const CACHE_STATIC_NAME = 'static-v1';
const CACHE_DYNAMIC_NAME = 'dynamic-v1';
const CACHE_INMUTABLE_NAME = 'inmutable-v1';


//guardamos el cache
self.addEventListener('install', e =>{
    const cacheProm = caches.open(CACHE_STATIC_NAME)
        .then(cache => { //las cosas que quiero grabar
            return cache.addAll([
                '/',
                '/index.html',
                '/favicon.ico',
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
                '/dist/js/scripts.js',  
                '/dist/js/custom.js ',
                '/dist/img/news/img01.jpg',
                '/dist/img/news/img07.jpg',  
                '/dist/img/news/img08.jpg',
                '/manifest.json'
              ]); 
        });

    const cacheINMUTABLE = caches.open(CACHE_INMUTABLE_NAME)
        .then(cache => { //las cosas que quiero grabar
            return cache.addAll([
                 'https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900',
                'https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i',
                '/CNAME',
                '/google01fde97b7e5e77fa.html'
                 ]);
        });    

    //Esperamos que todo termine
    e.waitUntil(Promise.all([cacheProm,cacheINMUTABLE]));
});

self.addEventListener('fetch', e =>{

    // 4   cache with Network UPDATE
    // Rendimiento es critico
    //Siempre estarán  un paso atras

    //ahora tiene que buscar el bootstrap que esta en los inmutables o no cargara
    if(e.request.url.includes('bootstrap')){
        return e.respondWith(caches.match(e.request));
    }


    const respuesta = caches.open(CACHE_STATIC_NAME) // busca el nombre del cache
        .then(cache =>{ // necesito que regrese la petición
            fetch(e.request).then( newRes => // vamos hacer el fetch para tener la ultima acutlaizacion
                cache.put(e.request, newRes)); //lo que este mas actualizado en hosting
            return cache.match(e.request); // retornamos el producto del cache
        });

    e.respondWith(respuesta); 


});