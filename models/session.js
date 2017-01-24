var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var urlSchema   = new Schema({
    
    UserAccount: String,
    Url: String,
    Host: String,
    VisitTime: String,
    Transition: String,
    LifeTime: Number,
    LocalTime: String,
    referrer: String,
    tabId: String
});

var bookmark   = new Schema({
    
    name: String,
    Url: String
});

module.exports = mongoose.model('url', urlSchema);
module.exports = mongoose.model('bookmark', bookmark);