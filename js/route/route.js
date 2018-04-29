'use strict';
var controller = require('../controller/dbHandler');

module.exports = function(router){

    router.get('/',(req,res,next) => {
        controller.findByGender(req);
    });

    router.post('/save',(req,res,next) => {
        controller.insertWithData(req);
    });

    return router;
}