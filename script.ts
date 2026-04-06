//function calling with retries using recursion

async function retry(fn: Function, retries: number) {
    try {
        return await fn();
    } catch (err) {
        if (retries > 0) {
            return await retry(fn, retries - 1);
        }
        throw new Error("Retries failed", { cause: err });
    }
}

const result =  retry(()=> console.log("Raaz"), 2);



