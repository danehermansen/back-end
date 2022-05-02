const express = require("express")
const app = express()
const cors = require("cors")



app.use(express.json())
app.use(cors())


app.listen(4000 , () => {
    console.log('server is running on 4000')
})


app.get("/api/users" , (req, res) => {
    let friends= ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"]
    res.status(200).send(friends)
})

app.get("/weather/:temperture", (req, res) => {
    const phrase = `<h3>It was ${req.params.temperture} today</h3>`
    res.status(200).send(phrase)
})

