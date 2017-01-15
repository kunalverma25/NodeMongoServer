var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
 
var sessionSchema   = new Schema({
    url: String,
    lastAccess: String,
    totalSeconds: Number
});

var urlSchema   = new Schema({
    host: String,
    lastAccess: String,
    totalSeconds: Number,
    urls: [sessionSchema]
});
module.exports = mongoose.model('url', urlSchema);