const redis = require('redis');

const redisClient = redis.createClient({
    username: 'default',
    password: 'rwziK4EipMDH74I5G83QGlPgFpwTEgOd',
    socket: {
        host: 'redis-12094.c301.ap-south-1-1.ec2.cloud.redislabs.com',
        port: 12094
    }
});
const connectReddis = async ()=>{
    await redisClient.connect(); 
    console.log("connected")
};
connectReddis();