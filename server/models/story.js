const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name:{type: String,required: true},
    storyUUID:{type: String,required: true},
    time:{type: Date,default: Date.now,required: true}
});

module.exports = mongoose.model('Story',schema); 