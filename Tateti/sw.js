const cacheName="TatetiCache_v1";
//const elements=["https://furrestarazu.github.io/Curso_PWA/Tateti/","index.html","css/style.css","js/script.js"];
const elements=[
    'https://furrestarazu.github.io/Curso_PWA/Tateti/',
    'index.html',
    'css/style.css',
    'js/script.js',
    'font/crayon3.ttf',
    'img/copaO.png',
    'img/copaX.png',
    'img/dedo.png',
    'img/fondo.png',
    'img/fondo2.png',
    'img/fondoCuaderno.png',
    'img/icons/icon-128x128.png',
    'img/icons/icon-144x144.png',
    'img/icons/icon-152x152.png',
    'img/icons/icon-192x192.png',
    'img/icons/icon-384x384.png',
    'img/icons/icon-512x512.png',
    'img/icons/icon-72x72.png',
    'img/icons/icon-96x96.png',
    'sounds/aplauso.mp3',
    'sounds/campeon.mp3',
    'sounds/circulo.mp3',
    'sounds/cruz.mp3'
]


// install --> instala los elementos en la caché del navegador
self.addEventListener("install", evt  =>
{
    //console.log("Service Worker instalado");
    evt.waitUntil(
        caches.open(cacheName)
        .then((cache) => 
        {
            console.log("Cache predeterminado:");
            cache.addAll(elements);

        }
        ));
});


// activate --> verifica que no haya cambios en los archivos. En caso de haberlos, pisa con la última versión
self.addEventListener("activate", evt =>
{
    console.log("Service Worker activado");
});


// fetch --> atrapa los pedidos al servidor
self.addEventListener("fetch", evt =>
{
    console.log("se atrapó el evento: ", evt);
    evt.respondWith(
        caches.match(evt.request)
        .then(cacheRes =>
        {
            return cacheRes || fetch(evt.request)
        }
    ));
});