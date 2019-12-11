const cacheName="TatetiCache_v1"; //se debe tener en cuenta las versiones para que se actualicen los cambios en los usuarios 

//elementos que deben ingresar directo al caché (para que funcione perfectamente en modo offline)
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
    evt.waitUntil( //espera hasta que el caché se abra
        caches.open(cacheName)
        .then((cache) => 
            {
                cache.addAll(elements); //agrega todos los elementos indicados más arriba al caché al momento de la instalación del service worker
            })
        );
});


// activate --> verifica que no haya cambios en los archivos. En caso de haberlos, pisa con la última versión
self.addEventListener("activate", evt =>
{
    evt.waitUntil(
        caches.keys() //espera hasta que se obtengan todos los identificadores de los caché
        .then(keys => 
            {
                return Promise.all(keys
                    .filter (key => key !== cacheName) //busca todos los cachés que no tengan el nombre que tiene actualmente
                    .map (key => caches.delete(key))   // y los borra, dejando sólo el último
                )
            })
    );
});


// fetch --> atrapa los pedidos al servidor
self.addEventListener("fetch", evt =>
{
    evt.respondWith(
        caches.match(evt.request) //verifica si coincide lo que se está pidiendo al servidor con lo que está guardado en el caché
        .then(cacheRes =>
            {
                return cacheRes || fetch(evt.request) //si existe, devuelve lo que está en caché, sino continua con el pedido al servidor
            })
    );
});