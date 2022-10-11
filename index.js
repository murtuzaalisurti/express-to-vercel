const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const { dbConnect } = require('./db/config')
const TestModel = require('./models/data')

dbConnect()

app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, 'public')});
})

app.get('/allData', (req, res) => {
    TestModel.find().then((entries) => {
        res.status(200).json({
            data: entries
        })
    }).catch((err) => {
        res.status(500).json({
            success: false
        })
    })
})

app.post('/addData', (req, res) => {
    // console.log(req.body.name)
    const Data = new TestModel({
        name: req.body.name
    })

    Data.save((err) => {
        if(err) {
            res.json({success: false})
        } else {
            console.log(Data)
            res.json({success: true})
        }
    })
})

app.listen(process.env.PORT || 5000);

module.exports = app;