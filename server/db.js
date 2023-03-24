const mongoose = require('mongoose')
const userModel = require('./schema/user')
const ObjectId = require('mongodb').ObjectId;

require('dotenv').config()

mongoose
    .connect(process.env.URL, { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })
console.log('Connected to Database...');

const db = mongoose.connection;

async function createUser(userInfo) {
    const user = new userModel(userInfo)
    await user.save()
}

async function updateUser(id, userInfo) {
    let newValues = {
        $set: {
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            phone: userInfo.phone,
            email: userInfo.email,
            // symptom:  userInfo.symptom,
            // appointmentDate: userInfo.appointmentDate,
            // appointmentTime: userInfo.appointmentDate,
            notified: userInfo.notified
        }
    }

    db.collection('users').updateOne({ _id: new ObjectId(id) }, newValues, function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
        // response.json(res);
    });
}

async function deleteUser(id) {
    db.collection('users').deleteOne({ _id: new ObjectId(id) }, (err, result) => {
        if (err) return console.log(err)
    })
}

async function getUsers() {
    const result = await db.collection('users').find().toArray()
    return result
}

// mongoose.disconnect()

module.exports = { getUsers, createUser, updateUser, deleteUser }