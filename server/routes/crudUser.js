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

export { router as Crudrouter }