const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/testUser")
    .then(() => {
        console.log('DataBase is connected')
    }).catch((err) => {
        console.log('DataBase is not connected', err)
    })

module.exports = mongoose