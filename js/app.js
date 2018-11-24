if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('./sw.js')
        .then(function(registration) {
            console.log('ServiceWorker registered!');
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        })
        .catch(function(err) {
            console.log('ServiceWorker failed :(', err);
        });
    });
  }