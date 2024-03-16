import mongoose from 'mongoose'

const CrudUserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: String
})

const CrudUserModel = mongoose.model("crudUser", CrudUserSchema)
export default CrudUserModel