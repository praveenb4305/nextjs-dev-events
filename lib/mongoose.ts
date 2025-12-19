import mongoose from "mongoose";

type MongooseCache = {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
}

declare global {
    var mongoose: MongooseCache | undefined;
}

// praveenb4305_db_user / 3ChsnyuIuMkjbGef

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error('MongoDB URI must be a valid MongoDB URI');
}

let cached: MongooseCache = global.mongoose || { conn: null, promise: null };

if(!global.mongoose) {
    global.mongoose = cached;
}

async function connectDB(): Promise<typeof mongoose> {
    if (!cached.promise) {
        const options = {
            bufferCommands: false;
        }
        cached.promise = await mongoose.connect(MONGODB_URI!, options).then((mongoose) => {
            return mongoose;
        });
    }

    try {
        cached.conn = await cached.promise;
    } catch (err) {
        cached.promise = null;
        throw err;
    }

    return cached.conn;
}

export default connectDB;
