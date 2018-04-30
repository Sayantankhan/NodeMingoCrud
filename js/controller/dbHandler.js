'use strict'
var Person = require('../schema/PersonSchema');
var Promise = require('Promise');

var logobj = require('../../log/logConfig');
const LOGGER = logobj.getLogger('appLog');

exports.findByGender = (gender) =>{
    LOGGER.trace(`finding into table based on gender::  ${gender}`);
    return new Promise((resolve,reject)=>{
        Person.find({'gender': gender},(err,docs)=>{
            if(err) LOGGER.trace(`${err}`);
            else { 
                LOGGER.trace(`fetched Successfully`);
                resolve(docs);
            }
        });
    });
};

exports.insertWithData = (req,res) => {
    LOGGER.trace(`inserting the data into table  ${req.body}`);
    var person = new Person(req.body);

    return new Promise((resolve,reject)=>{
        person.save(function(err) {
            if (err) LOGGER.error(`error in inserting into table :: ${req.body.first_name} ${req.body.email}`);
            else {
                LOGGER.trace('person saved successfully!');
                resolve('saved');
            }
        });
    });
};

exports.findBYElementId = (querId) => {
    LOGGER.trace(`finding into table based on id:: ${querId}`);
    return new Promise((resolve,reject)=>{
        Person.find({'id': querId},(err,docs)=>{
            if(err) LOGGER.trace(`${err}`);
            else {
                LOGGER.trace(`fetched Successfully`);
                resolve(docs);
            }
        });
    });
};
