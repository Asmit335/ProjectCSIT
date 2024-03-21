import express from "express"
import CrudUserModel from "../models/CrudUser.js"

const router = express.Router()

router.post("/createUser", async(req, res) => {
    try {
        const userData = req.body;
        const newUser = await CrudUserModel.create(userData);

        res.status(201).json({
            status: "success",
            data: newUser
        });
    } catch (e) {
        res.status(400).json({
            status: 'error',
            message: e.message
        });
    }
});

router.get("/getCrudata", async(req, res) => {
    const curdData = await CrudUserModel.find({})
    res.status(200).json(curdData)
})


router.delete("/removecrud/:email", async(req, res) => {
    const { email } = req.params; // Extracting the email from URL params

    try {
        await CrudUserModel.deleteOne({ email: email });
        res.json({
            status: "okk",
            email: email

        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});


//update data

router.put("/updatecrud/:id", async(req, res) => {
    const { id } = req.params; // Extract the id from the URL params
    const { name, email: newEmail, age } = req.body;
    try {
        const updateUser = await CrudUserModel.findByIdAndUpdate(
            id, { name, email: newEmail, age }, { new: true }
        );

        if (!updateUser) {
            console.log(`No document found with id ${id}`);
            return res.status(404).json({ message: "No document found with the provided id" });
        }

        console.log("User Updated Successfully:", updateUser);
        res.json({ message: "User Updated Successfully", user: updateUser });
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});


router.get("/getUser/:id", (req, res) => {
    const id = req.params.id
    CrudUserModel.findById({ _id: id })
        .then(users => res.json(users))
        .catch(e => res.json(e))

})




export { router as Crudrouter }