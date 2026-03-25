//debounce function: it allows minimum time duration in each function function calling

 function debounce(fn, delay){
    let timeOut;
    return (...args) => {
        clearTimeout(timeOut);

        timeOut = setTimeout(() => {
            fn.apply(...args, this);
        }, delay);
    }
 }

 const logs = debounce(() => console.log("debounced"), 3000);
 logs();
 logs();