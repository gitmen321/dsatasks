class RateLimiter{
    constructor(limit, windowMs){
        this.limit = limit,
        this.windowMs = windowMs,
        this.memory = new Map();
    }

    isAllowed(userId) {

        const now = new Date();

        if (!this.memory.has(userId)) {
            this.memory.set(
                userId, {
                    count: 1,
                    startTime: now
                }
            );
            return true;
        }

        const userData = this.memory.get(userId);

        if(now - userData.windowMs > this.windowMs ){
            this.memory.set(
                userId, {
                    count: 1,
                    startTime: now,
                }
            );
            return true;
        }
        
        if (userData.count < this.limit) {
            userData.count ++;
            return true;
        }

        return false;
    }
}

const rateLimiter = new RateLimiter(3, 6000);
console.log(rateLimiter.isAllowed("Raaz"));
console.log(rateLimiter.isAllowed("Raaz"));
console.log(rateLimiter.isAllowed("Raaz"));
console.log(rateLimiter.isAllowed("Raaz"));





