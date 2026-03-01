class RateLimiter {
    constructor(limit, windowMs) {
        this.limit = limit;
        this.windowMs = windowMs;
        this.memory = new Map();
    }

    isAllowed(userId) {
        const now = Date.now();

        if (!this.memory.has(userId)) {
            this.memory.set(userId, {
                count: 1,
                startTime: now
            });
            return true;
        }

        const userData = this.memory.get(userId);
        if (now - userData.startTime > this.windowMs) {
            this.memory.set(userId, {
                count: 1,
                startTime: now
            });
            return true;
        }

        if (userData.count < this.limit) {
            userData.count++;
            return true;
        }
        return false;
    }
}

const limiter = new RateLimiter(3, 5000);
console.log(limiter.isAllowed('Raaz'));
console.log(limiter.isAllowed('Raaz'));
console.log(limiter.isAllowed('Raaz'));
console.log(limiter.isAllowed('Raaz'));
console.log(limiter.isAllowed('Raza'));
console.log(limiter.isAllowed('Raza'));
console.log(limiter.isAllowed('Raza'));

console.log(limiter.memory);




