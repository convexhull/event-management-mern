const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require('./events/eventRoute');

require("./db/db");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(router);

const port = process.env.PORT || 8000;


app.listen( port, () => {
    console.log(`Server is up and running on PORT ${port}`);
})


