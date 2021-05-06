const express = require("express");
const app = express();
const fs = require("fs");

app.get("/course1", function (req, res) {
  res.sendFile(__dirname + "/views/course1.html");
});

app.get("/course2", function (req, res) {
    res.sendFile(__dirname + "/views/course2.html");
});

app.get("/course3", function (req, res) {
    res.sendFile(__dirname + "/views/course3.html");
});

app.get("/course4", function (req, res) {
    res.sendFile(__dirname + "/views/course4.html");
});

app.get("/course5", function (req, res) {
    res.sendFile(__dirname + "/views/course5.html");
});

app.get("/course6", function (req, res) {
    res.sendFile(__dirname + "/views/course6.html");
});
  
app.get("/course7", function (req, res) {
    res.sendFile(__dirname + "/views/course7.html");
});
  
app.get("/course8", function (req, res) {
    res.sendFile(__dirname + "/views/course8.html");
});
  
app.get("/course9", function (req, res) {
    res.sendFile(__dirname + "/views/course9.html");
});

app.listen(8000, function () {
  console.log("Listening on port 8000!");
}); 