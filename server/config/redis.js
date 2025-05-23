import redis from 'redis';

const client = redis.createClient({
  url: process.env.REDIS_URL
});

client.on('error', (err) => console.log('Redis Client Error', err));
await client.connect();

export default client;