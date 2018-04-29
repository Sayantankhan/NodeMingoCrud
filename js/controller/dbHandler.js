'use strict'
var Person = require('../schema/PersonSchema');

var logobj = require('../../log/logConfig');
const LOGGER = logobj.getLogger('appLog');

exports.findByGender = (req,res) =>{
    LOGGER.trace(`finding into table based on gender::  ${req.query.gender}`);
    Person.find({'gender': req.query.gender },(err,docs)=>{
        console.log(docs);
    });
};

exports.insertWithData = (req,res) => {
    LOGGER.trace(`inserting the data into table  ${req.body}`);
    var person = new Person(req.body);

    person.save(function(err) {
        if (err) LOGGER.error(`error in inserting into table :: ${req.body.first_name} ${req.body.email}`);
        else LOGGER.trace('person saved successfully!');
    });
};

exports.findBYElement = (req,res) => {
    LOGGER.trace(`|| TRACE ||finding into table based on ::  ${req.query.paramter}`);
};
