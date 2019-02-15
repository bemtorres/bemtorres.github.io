importScripts('js/sw-utils.js');

const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';
const INMUTABLE_CACHE = 'inmutable-v1';

const APP_SHELL = [
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
    '/js/sw-utils.js'
];

const APP_SHELL_INMUTABLE = [
    'https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900',
    'https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i',
];


//instalacion
self.addEventListener('install', e=>{

    const cacheStatic = caches.open(STATIC_CACHE).then(cache => cache.addAll(APP_SHELL));
    const cacheInmutable = caches.open(INMUTABLE_CACHE).then(cache => cache.addAll(APP_SHELL_INMUTABLE));

    e.waitUntil(Promise.all([cacheStatic, cacheInmutable]));
});

self.addEventListener('activate', e=>{
    const respuesta = caches.keys().then(keys=>{
        keys.forEach(key =>{
            if(key !== STATIC_CACHE && key.includes('static')){ // es diferente en el cache static, es borrado y tiene el nuevo
                return caches.delete(key);
            }
        });
    });

    e.waitUntil(respuesta);
});

self.addEventListener('fetch' , e=>{
    const resp = caches.match(e.request).then(res =>{
        if(res){
            return res;
        }else{
            //console.log(e.request.url);

            return fetch(e.request).then(newRes =>{
                return actualizaCaheDinamico(DYNAMIC_CACHE, e.request, newRes);
            });
        }
    });

    e.respondWith(resp);

});