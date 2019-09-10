import * as Redis from "ioredis";

export const redis = new Redis();

//   process.env.NODE_ENV === "production"
//     ? new Redis(process.env.REDIS_URL)
