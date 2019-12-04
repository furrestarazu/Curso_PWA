// install
self.addEventListener("install",evt  =>
{
    console.log("Service Worker instalado")
    console.log("posta")
} );


// activate
self.addEventListener("activate", evt =>
{
    console.log("Service Worker activado");
})


// fetch
