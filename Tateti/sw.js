// install --> instala los elementos en la caché del navegador
self.addEventListener("install", evt  =>
{
    console.log("Service Worker instalado");
} );


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