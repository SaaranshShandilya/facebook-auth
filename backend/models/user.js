const mongoose = require('mongoose');

const User = new mongoose.Schema({
    fname : {type: 'String', required: true},
    sname : {type: 'String', required: true},
    remail : {type: 'String', required: true, unique: true},
    npass : {type: 'String', required: true},
    dob: {type: 'String', required: true},
    gender : {type: 'String', required: true}
},
    {collection:'userdata'}

)

const model = mongoose.model('UserData', User)

module.exports = model