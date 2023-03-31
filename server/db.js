const mongoose = require("mongoose");
const userModel = require("./schema/user");
const ObjectId = require("mongodb").ObjectId;
const { sendNotificationSMS } =require ("./twilio/twilio")

require("dotenv").config();

mongoose.connect(process.env.URL, { useNewUrlParser: true }).catch((e) => {
    console.error("Connection error", e.message);
});
console.log("Connected to Database...");

const db = mongoose.connection;

async function createUser(userInfo) {
    const user = new userModel(userInfo);
    await user.save();
}

async function updateUser(id, userInfo) {
    
    db.collection("users").updateOne({ _id: new ObjectId(id) }, {$set:userInfo}, function (err, res) {
        if (err) throw err;
        console.log('res',res)
        console.log("1 document updated");

        console.log('userInfoooooooo',userInfo)

        if (userInfo.done) {
            sendSMS()
        }
    });
    
}



async function sendSMS() {
    const date = new Date().toISOString().split('T')[0];
    console.log('date',date)
    const result = await db.collection("users").find({ done: false,notified: false, appointmentDate: date},{sort:{appointmentTime:-1},limit:1}).toArray()

    console.log('result',result)
    console.log('result.phone',result[0].phone)
     await sendNotificationSMS(result[0].phone)



    // db.collection("users").find({ done: false},
        
    //     (err, res)=>{
    //         if (err) throw err;
    //         console.log('resssss',res)
    //     // console.log('resssss',res)
    //     // sendNotificationSMS(res.phone)
    // }
    // )
}


// async function sendSMS(date) {
//     db.collection("users").find({ done: false, notified: false, appointmentDate: date},{sort:{appointmentTime:-1},limit:1},
//         (err, res)=>{
//         if (err) throw err;
//         console.log('resssss',res)
//         sendNotificationSMS(res.phone)
//     })
    
// }

async function deleteUser(id) {
    db.collection("users").deleteOne({ _id: new ObjectId(id) }, (err, res) => {
        if (err) return console.log(err);
    });
}

async function getUsers() {
    const result = await db.collection("users").find().toArray();
    return result;
}

// mongoose.disconnect()

module.exports = { getUsers, createUser, updateUser, deleteUser };
