const express = require("express");
const router = express.Router();
const db = require('../mysql')

router.get("/todos", async (req, res) => {
    try {
        const [result, _] = await db.query("SELECT * FROM todos")
        console.log(result)
        res.json(result)

    } catch (error) {
        console.log(error);
    }
})
router.post("/add", async (req, res) => {
    const { todoName, todoDesc, todoStatus } = req.body
    try {
        const [result, _] = await db.query("INSERT INTO todos (todoName, todoDesc, todoStatus) VALUES (?,?,?)", [todoName, todoDesc, todoStatus])
        console.log(result)
        res.json(result)

    } catch (error) {
        console.log(error);
    }
})

module.exports = router;