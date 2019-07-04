function f() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("returned from f after a second");
        }, 1000);
    });
}

f().then(function(result) { 
	console.log(result); 
});
