const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

let counter = 0

app.get('/update', (req,res) => {
    counter = counter + 1
    console.log(counter)
})

app.get('/get', (req,res) => {
    console.log('Siiiii');
    res.send({"counter": counter});
})

const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening on port ${port}....`))