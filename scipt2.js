//debounce function: it allows minimum time duration in each function function calling

function debounce(fn, delay){
    let timeoutId;
    return (...args)=>{
        clearTimeout(timeoutId);

        timeoutId = setTimeout(()=> {
            fn.apply(...args, this);
        }, delay);
    }
}

const logger = debounce(()=> console.log("i'm best"), 3000);

logger();