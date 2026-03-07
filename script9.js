// debounce function

function debounce(fn, delay) {
    let timer;

    return (...args) => {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn.apply(args, this);
        }, delay);
    }
}

const logs = debounce(() => console.log("Happening after some second"), 2000);
logs();
logs();
