function loop(start, test, update, body) {
    for (let value = start; test(value); value = update(value)) {
        body(value);
    };
}

loop(n=0,n=>n<10,n=>n += 2,n=>{console.log("Holo")});