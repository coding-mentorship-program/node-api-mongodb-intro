import { db } from "../mongoUtility.js"
const teachers = db.collection('teachers') // collection

// all student FUNCTIONS
export const getAllTeachers = async (req, res) => {
	const allTeachers = await teachers.find().toArray()
	res.send(allTeachers)
}

export const addNewTeacher = async (req, res) => {
	// this request takes time this is an asynchronous request
	const newTeachers = await teachers.insertOne({
		type: 'Teachers',
		name: 'Margarita Armas',
		grade: 11,
		registered: true,
	})

	res.send(newTeachers)
}

export const updateTeacher = async (req, res) => {
	res.send('something ')
}

export const deleteTeacher = async (req, res) => {
	res.send('deleted Teachers')
}
