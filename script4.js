class RateLimiter {
    constructor(windowMs, limit) {
        this.windowMs = windowMs,
            this.limit = limit,
            this.memory = new Map();
    }

    isAllowed(userId) {
        const now = new Date();
        const userData = this.memory.get(userId);

        if (!this.memory.has(userId) || now - userData.startTime > this.windowMs) {
            this.memory.set(userId, {
                count: 1,
                startTime: now,
            });
            return true;
        }

        if (userData.count < this.limit) {

            userData.count += 1;
            return true;
        }


        return false;
    }
}


const rateLimiter = new RateLimiter(3000, 3);

console.log("First try:", rateLimiter.isAllowed("Raaz123"));
console.log("Second try:", rateLimiter.isAllowed("Raaz123"));
console.log("Third try:", rateLimiter.isAllowed("Raaz123"));
console.log("Fourth try:", rateLimiter.isAllowed("Raaz123"));






