const CACHE_NAME = 'meu-pwa-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/',
  './carspot_1-versaofirebase/carspot_1-versaofirebase/FundoImagem/logo.png'
];

// Instalar o Service Worker e salvar no cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Arquivos em cache adicionados!');
        return cache.addAll(urlsToCache);
      })
  );
});

// Buscar os arquivos no cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});

