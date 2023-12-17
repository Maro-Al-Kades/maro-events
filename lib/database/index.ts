import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

let cashed = (global as any).mongoose || {conn: null, promise: null}

const connectToDatabase = async () => {
  if(cashed.conn) return cashed.conn;

  if(!MONGODB_URI) throw new Error('MONGODB_URI is missing');

  cashed.promise = cashed.promise || mongoose.connect(MONGODB_URI, {
    dbName: "maro-events",
    bufferCommands: false,
  })

  cashed.conn = await cashed.promise;

  return cashed.conn;
}

export default connectToDatabase;