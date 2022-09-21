import * as cheerio from 'cheerio';
import fetch from 'node-fetch';
const express = require('express');
const app = express();
const path = require('path');


app.get('/', (req, res) => {
    res.json("Home");
})

app.listen(process.env.PORT || 3000);

module.exports = app;
