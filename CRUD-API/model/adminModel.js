const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    userName: { type: String },
    mobileNo: { type: String },
    password: { type: Number },
})

module.exports = mongoose.model('Admin', adminSchema)
// module.exports = mongoose.model('Admin', userSchema)