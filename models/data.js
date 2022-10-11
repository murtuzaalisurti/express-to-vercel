const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const testSchema = new Schema({
    name: {
        type: String,
        required: true
    }
})

const TestModel = mongoose.model('TestModel', testSchema)

module.exports = TestModel