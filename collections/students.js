
import { db } from "../mongoUtility.js"
const students = db.collection('students') // collection

// all student FUNCTIONS
export const getAllStudents = async (req, res) => {
	const allStudents = await students.find().toArray()
	res.send(allStudents)
}

export const addNewStudent = async (req, res) => {
	// this request takes time this is an asynchronous request
	const newStudent = await students.insertOne({ type: 'student', name: 'Margarita Armas', grade: 11, registered: true })

	res.send(newStudent)
}

export const updateStudent = async (req, res) => {
	res.send('something ')
}

export const deleteStudent = async (req, res) => {
	res.send('deleted student')
}
