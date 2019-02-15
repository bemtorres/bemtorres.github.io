
// Guardar en el cache dinamico
function actualizaCaheDinamico(dynamicCache, req, res){
    if(res.ok){
        // hay que almacenar en el cache
        return caches.open(dynamicCache).then(cache =>{
            cache.put(req, res.clone());
            return res.clone();
        });      
    }else{
        // si no viene nada, fallo red y cache
        return res; // error de conexion o cualquier cosa
    }
}