const express = require("express");
const app = express();
const routes = require('./TodoRouters/router')
const cors = require('cors')
const PORT = 5000;

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("hello garv")
})
app.use("/", routes)

app.listen(PORT, () => {
    console.log("my name ismkjlj")
});
