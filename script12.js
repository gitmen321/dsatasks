// closure in js

function closureFn() {
    let x = 0;

    return {
        incr() {
            return ++x;
        }
    }
}

const obj1 = closureFn();
obj1.incr();
obj1.incr();

const obj2 = closureFn();
obj2.incr();

console.log("obj1:",obj1.incr());
console.log("obj2:",obj2.incr());

