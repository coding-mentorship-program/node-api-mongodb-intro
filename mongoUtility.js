import { MongoClient } from 'mongodb'
import { MONGO_URI } from './mongo_uri.js'

const client = new MongoClient(MONGO_URI)
export const db = client.db('school') // db name