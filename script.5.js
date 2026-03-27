//LRU least recent used cache problem

class LRUCahce {
  constructor(capacity) {
    this.capacity = capacity,
      this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return -1;

    const value = this.cache.get(key);
    this.cache.delete(key);

    this.cache.set(key, value);
    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    this.cache.set(key, value);

    if (this.cache.size > this.capacity) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
  }
}


const myCache = new LRUCahce(3);

myCache.put(1, "Raaz");
myCache.put(2, "Liya");
myCache.put(3, "Shadu");


console.log("cache Size:", myCache.cache.size);

myCache.get(2);

myCache.put(4, "Sherii");

console.log("is key 2 there?", myCache.get(2));
console.log("is key 1 there?:", myCache.get(1));