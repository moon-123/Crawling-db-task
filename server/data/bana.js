import MongoDb from 'mongodb';
import { getBanas } from '../db/database.js';
const ObjectId = MongoDb.ObjectId;

// filter를 사용하면 여러개를 반환 가능
// find를 사용하면 반복문을 직접 돌리지 않아도 됨
// js는 obj에 key와 value가 같으면 하나를 생략할 수 있다.

// 단 트윗은 최근글이 맨 위로

export async function getAll() {
    return getBanas()
        .find()
        .toArray()
    // return db.execute(`${SELECT_JOIN} ${ORDER_DESC}`).then((result) => result[0]);
};
// name, address, filename
