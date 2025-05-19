const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
    res.send("Express App Responded");
})

app.listen(process.env.PORT || 3000);

module.exports = app;