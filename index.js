import express from 'express'
import cors from 'cors'
import { addNewStudent, getAllStudents, updateStudent, deleteStudent } from './collections/students.js'
import { getAllTeachers, addNewTeacher, updateTeacher, deleteTeacher } from './collections/teachers.js'
import { getAllParents, addNewParent, updateParent, deleteParent } from './collections/parents.js'
import 'dotenv/config'

const PORT = process.env.PORT

const app = express()
app.use(cors()) // so browser could interact with API
app.use(express.json()) // API could receive JSON data [{},{},{}]

// all student ROUTES
app.get('/students', getAllStudents)
app.post('/students', addNewStudent)
app.put('/students', updateStudent)
app.delete('/students', deleteStudent)

// all teachers ROUTES
app.get('/teachers', getAllTeachers)
app.post('/teachers', addNewTeacher)
app.put('/teachers', updateTeacher)
app.delete('/teachers', deleteTeacher)

// all parents ROUTES
app.get('/parents', getAllParents)
app.post('/parents', addNewParent)
app.put('/parents', updateParent)
app.delete('/parents', deleteParent)


app.listen(PORT, () => console.log('my API is running 😎'))
