require("dotenv").config({ path: "../.env" });

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

function sendSMS(phoneNumber) {
    client.messages.create({
        body: "TESTING MESSAGE",
        from: "+14752628564",
        to: `+1${phoneNumber}`
    });
}
sendSMS("7783213740");

module.exports = sendSMS;
