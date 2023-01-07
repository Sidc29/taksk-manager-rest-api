const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

router.get("/", async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({ tasks })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
})

router.post("/", async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
})

router.get("/:id", async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOne({ _id: taskID })
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
})

router.patch("/:id", async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true
        })
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findByIdAndDelete({ _id: taskID })
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
})

module.exports = router