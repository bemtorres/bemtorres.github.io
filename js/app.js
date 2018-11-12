if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/sw.js')
        .then(function() {
            console.log('ServiceWorker registered!');
        })
        .catch(function(err) {
            console.log('ServiceWorker failed :(', err);
        });
    });
  }