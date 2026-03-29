// debounce function

function debounce(fn, delay) {
    let timeOutId;
    return (...args) => {
        clearTimeout(timeOutId);

        timeOutId = setTimeout(() => {
            fn.apply(args, this);
        }, delay);
    }
}

const logger = debounce(()=> console.log('Raaz'), 2000);
logger();
logger();
logger();
