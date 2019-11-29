if("serviceWorker" in navigator)
{
    navigator.serviceWorker.register('/sw.js')
    .then(() => console.log("Service Worker registrado"))
    .catch(() => console.log("Ocurrió un error al registrar el Service Worker"));
}

