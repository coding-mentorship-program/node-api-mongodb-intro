import { db } from "../mongoUtility.js"
const parents = db.collection('parents') // collection

// all student FUNCTIONS
export const getAllParents = async (req, res) => {
	const allParents = await parents.find().toArray()
	res.send(allParents)
}

export const addNewParent = async (req, res) => {
	// this request takes time this is an asynchronous request
	const newParents = await parents.insertOne({
		type: 'Parents',
		name: 'Margarita Armas',
		grade: 11,
		registered: true,
	})

	res.send(newParents)
}

export const updateParent = async (req, res) => {
	res.send('something ')
}

export const deleteParent = async (req, res) => {
	res.send('deleted Parents')
}
