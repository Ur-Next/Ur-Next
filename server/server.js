const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');
const { createUser, getUsers, updateUser, deleteUser } = require('./db')

const app = express();
app.set('port', process.env.PORT || 3002)

app.use(bodyParser.urlencoded({ extended: true }))
// app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('<h1>Hello world<h1>');
});

// change to register
app.post('/user', (req, res) => {
    createUser(req.body).then(x => {
        console.log(req.body)
        res.send(`User created ${JSON.stringify(req.body)}`);
        res.end()
    })
});

//
app.post('/user/:id', (req, res) => {
    console.log(req.params.id, req.body)
    updateUser(req.params.id, req.body).then(x => {
        console.log(req.body)
        // res.send(`User updated ${JSON.stringify(req.body)}`);
        res.end()
    })
})

app.delete('/user/:id', (req, res) => {
    deleteUser(req.params.id).then(x => {
        // res.send({status:"Success",data:data});
        res.end()
    })
})


app.get('/users', (req, res) => {
    getUsers().then(x => {
        res.send(x)        
        // res.send(`result from server ${JSON.stringify(req.body)}`);
        res.end()
    })
});

app.listen(app.get('port'), () => {
    console.info(`Server listen on port ${app.get('port')}`);
})