const cacheName="TatetiCache";
const elements=["https://furrestarazu.github.io/Curso_PWA/Tateti/","index.html","css/style.css","js/script.js","sounds/"];


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
});