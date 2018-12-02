const express = require('express')
const app = express()

app.get('/', (req, res ) => {
    res.send({cathal: "meagher"})
})


const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log("Running on port: 3000"))