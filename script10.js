// implement my version of promise

function myPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        const result = [];
        let completed = 0;

        promises.forEach((p, index) => {
            Promise.resolve(p)
            .then(value => {
                result[index] = value;
                completed++;

                if (completed === promises.length) {
                    resolve(result);
                }
            })
            .catch(reject);
        });
    });
}