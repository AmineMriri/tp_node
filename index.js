const express = require("express");
const student_router = require('./routers/students')
const app = express();
const fs = require("fs");
const Joi = require("joi");
const port = 3000
//const students = require("./students.json");

app.use(express.json());

app.use('/students',student_router)






app.listen(port, () => console.log(`Example app listening on port ${port}!`))