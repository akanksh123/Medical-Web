const path = require('path');
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const doctor = require("./routes/doctor");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/doctor", doctor);

app.listen(3000);
