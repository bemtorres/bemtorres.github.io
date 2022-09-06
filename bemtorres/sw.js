importScripts('js/sw-utils.js');

const STATIC_CACHE = 'static-v6';
const DYNAMIC_CACHE = 'dynamic-v6';
const INMUTABLE_CACHE = 'inmutable-v6';

const APP_SHELL = [
    '/',
    '/index.html',
    '/favicon.ico',   
];

const APP_SHELL_INMUTABLE = [
    'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700',
    '/plugins/fontawesome-free/css/all.min.css',
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