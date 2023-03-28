require("dotenv").config({ path: "../.env" });

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

function sendNotificationSMS(phoneNumber) {
    return client.messages.create({
        body: `*** Notification Testing Message ***`,
        from: "+14752628564",
        to: `+1${phoneNumber}`
    });
}

function sendRegistrationSMS(phoneNumber, patientName, appointmentDate, appointmentTime) {
    return client.messages.create({
        body: `
        Hi ${patientName},
        Your appointment on ${appointmentDate} at ${appointmentTime} is confirmed.
        `,
        from: "+14752628564",
        to: `+1${phoneNumber}`
    });
}
sendRegistrationSMS("7783213740", "KK", "13-2-2022", "13:00");

module.exports = { sendNotificationSMS, sendRegistrationSMS };
