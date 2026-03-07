//debounce function: it allows minimum time duration in each function function calling

 const debounce = (fn, delay) => {
    let timeOutId;

    return (...args) => {
        clearTimeout(timeOutId);

        timeOutId = setTimeout(() => {
            fn.apply(args, this);
        }, delay);
    }
 }

 const logs = debounce(() => console.log("Debouncing"), 3000);
 logs();
 logs();