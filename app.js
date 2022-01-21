const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
app.set("views", "./public")
app.set("view engine", "ejs")

app.use(bodyParser())
app.use(express.static("public"))
app.use("/css", express.static(path.join(__dirname, "/public/css")))
app.use("/js", express.static(path.join(__dirname, "/public/js")))

app.get("/", (req, res) => {
    res.render("index")
})

app.post("/", (req, res) => {
    let sumOfNumbers = parseInt(req.body.firstNumber) + parseInt(req.body.secondNumber) + parseInt(req.body.thirdNumber)
    let average = sumOfNumbers / 3
    res.render("result", {result: "Average: " + average})
})

app.get("/:name", (req, res) => {

    res.render("result", {result: "Name: " + req.params.name})
})

app.listen(6969, () => {
    console.log("Listening at port 6969")
})