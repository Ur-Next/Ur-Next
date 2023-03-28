const express = require("express");
const bodyParser = require("body-parser");
// const cors = require('cors');
const { createUser, getUsers, updateUser, deleteUser } = require("./db");
const { sendRegistrationSMS } = require("./twilio/twilio");


const app = express();
app.set("port", process.env.PORT || 3002);

app.use(bodyParser.urlencoded({ extended: true }));


//CORS ADDED TO TEST DELETE (SVETLANA)
const cors = require('cors');
app.use(cors({origin:'*'}));
//END OF CODE ADDED


// app.use(cors())
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("<h1>Hello world<h1>");
});

// change to register
app.post("/user", (req, res) => {
    createUser(req.body).then((x) => {
        console.log(req.body);
        sendRegistrationSMS(req.body.phone);
        res.send(`User created ${JSON.stringify(req.body)}`);
        res.end();
    });
});

//
app.post("/user/:id", (req, res) => {
    console.log(req.params.id, req.body);
    updateUser(req.params.id, req.body).then((x) => {
        console.log(req.body);
        res.end();
    });
});

app.delete("/user/:id", (req, res) => {
    deleteUser(req.params.id).then((x) => {
        res.end();
    });
});

app.get("/users", (req, res) => {
    getUsers().then((x) => {
        res.send(x);
        res.end();
    });
});

app.listen(app.get("port"), () => {
    console.info(`Server listen on port ${app.get("port")}`);
});
