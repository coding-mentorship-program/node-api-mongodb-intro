import express from 'express'
import cors from 'cors'
import { MongoClient } from 'mongodb'
import { MONGO_URI } from './mongo_uri.js'

const client = new MongoClient(MONGO_URI)
const db = client.db('school') // db name
const students = db.collection('students') // collection
const teachers = db.collection('teachers') // collection

const app = express()
app.use(cors()) // so browser could interact with API
app.use(express.json()) // API could receive JSON data [{},{},{}]

app.get('/students', async (req, res) => {
	const allStudents = await students.find().toArray()
	res.send(allStudents)
})

app.post('/students', async (req, res) => {
	// this request takes time this is an asynchronous request
	const newStudent = await students.insertOne({ type: 'student', name: 'Margarita Armas', grade: 11, registered: true })

	res.send(newStudent)
})

app.listen(4000, () => console.log('my API is running 😎'))
