const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        phone: { type: String, required: true },
        email: { type: String, required: true },
        notified: { type: Boolean, default: false },
        symptom:  { type: String, required: true },
        appointmentDate: { type: Date, required: true },
        appointmentTime: { type: String, required: true },
        done: { type: Boolean, default: false },
    },
    { timestamps: true })

const userModel = mongoose.model('User', userSchema)

module.exports = userModel