const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/auth-check', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false  //to remove the depreciation warning
})