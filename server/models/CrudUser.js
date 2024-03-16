import mongoose from 'mongoose'

const CrudUserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})

const CrudUserModel = mongoose.model("crudUser", CrudUserSchema)
export default CrudUserModel