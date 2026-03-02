//debounce function

function debounce(fn, delay){
    let timeOutId;

    return function(...args){
         clearTimeout(timeOutId);

         timeOutId = setTimeout(() => {
            fn.apply(this, args);
         }, delay);
    }
} 

const log = debounce(() => console.log("Hello"), 1000);

log();
log();
log();