const transporter = require("./node.js");
const express = require("express");
const bodyParser = require("body-parser");
// const transporter = require("./node");

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const app = express();
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));

const route = express.Router();
const port = process.env.PORT || 5000;

app.use('/v1', route);
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})

// app.post("./mail", transporter)