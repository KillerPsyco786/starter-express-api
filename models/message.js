// models/message.js
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(
    {
        text: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true } // Adds createdAt and updatedAt fields
);

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
