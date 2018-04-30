var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

//create a schema
var personSchema = new Schema({
    id : { type: Number, required: true, unique: true },
    first_name : { type: String, required: true},
    last_name : { type: String, required: true},
    email : String,
    gender : String,
    company : String,
    stock : String
},{collection: 'person'});

var Person = mongoose.model('Person',personSchema);

// make this available to our users in our Node applications
module.exports = Person;