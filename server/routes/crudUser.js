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


router.post("/removecrud", async(req, res) => {

    const removeCrudData = await CrudUserModel.findOneAndDelete({ email: req.body.email })
    console.log("removed crud Data.");

    res.json({
        success: true,
        message: "removed crud DAta",
        removedId: removeCrudData._id

    })
})

export { router as Crudrouter }