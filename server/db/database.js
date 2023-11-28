import MongoDb from 'mongodb';
import { config } from '../config.js';

let db;
export async function connectDB(){
    return MongoDb.MongoClient.connect(config.db.host, {dbName:'bana'})
        .then((client) => db = client.db());
} 


// collection 을 리턴해주는 함수.
export function getBanas(){
    return db.collection('store');
}

