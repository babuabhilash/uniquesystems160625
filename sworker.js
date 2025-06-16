self.addEventListener("install",e=>{

    e.waitUntil(caches.open("static").then(cache=>{
        return cache.addAll(["./","./css/custom-style.css","./images/us64.png","./images/us512.png","./images"]);
    }))

})
self.addEventListener("fetch",e=>{
    e.respond(
        caches.match(e.request).then(response=>{
            return response || fetch(e.request);
        })
    )
})