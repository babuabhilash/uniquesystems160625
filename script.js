if("serviceWorker" in navigator){
navigator.serviceWorker.register("sworker.js").then(regisration=>{
    console.log("Service worker registered")
    console.log(regisration);

}).catch(error=>{
    console.log("Service worker error")
    console.log(error)
})
}
else{
    alert("Service worker not working")
    
}