import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, },
    confirm: { type: String, required: true, }
})

const UserModel = mongoose.model("User", UserSchema)

export { UserModel as User }