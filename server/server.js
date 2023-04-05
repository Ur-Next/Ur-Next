const express = require("express");
const { createUser, getUsers, updateUser, deleteUser, getUserByPhone } = require("./db");
const { sendRegistrationSMS } = require("./twilio/twilio");


const app = express();
app.set("port", process.env.PORT || 3002);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("<h1>Hello world<h1>");
});

// change to register
app.post("/user", (req, res) => {
    createUser(req.body).then((x) => {
        // console.log(req.body);
        sendRegistrationSMS(req.body.phone);
        res.send(`User created ${JSON.stringify(req.body)}`);
    });

});


// update users
app.post("/user/:id", (req, res) => {
    updateUser(req.params.id, req.body).then((x) => {

        res.send('Updated')
       
    });
});

app.delete("/user/:id", (req, res) => {
    deleteUser(req.params.id).then((x) => {
        res.json('User deleted!')
    
    });
});

// get user based on phone number
app.get("/user/:phone", (req, res) => {
    console.log(req.params.phone)
    getUserByPhone(req.params.phone).then((x) => {
        res.json(x);
    })
});

app.get("/users", (req, res) => {
    getUsers().then((x) => {
        res.send(x);
    });
});


app.listen(app.get("port"), () => {
    console.info(`Server listen on port ${app.get("port")}`);
});



