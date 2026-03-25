//function calling with retries using recursion

async function retry(fn, retries) {
    try {
        return await fn();
    } catch (err) {
        if (retries > 0) {
            return await retry(fn, retries - 1);
        }
        else {
            throw new Error("Retries failed, error:", err.message);
        }
    }

}

