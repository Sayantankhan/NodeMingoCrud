'use strict';
var controller = require('../controller/dbHandler');
var prettyjson = require('prettyjson');

module.exports = function(router){

    router.get('/',(req,res,next) => {
        let queryId = req.query.id || null;
        let gender = req.query.gender || null;
        var promise;
        if(gender != null){
            promise = controller.findByGender(gender);
        }
        else if(queryId != null){
            promise = controller.findBYElementId(queryId);
        }
        promise.then((data)=>{
            res.json(`${data}`);
        });
    });

    router.post('/save',(req,res,next) => {
        var promise = controller.insertWithData(req);
        promise.then((data)=>{
            res.json({'status':`${data}`});
        })
    });

    router.post('/update',(req,res)=>{
        var promise = controller.updateElementById(req.body.id,req.body);
        promise.then((data) => {
            res.json({'status':`${data}`});
        });
    });

    // catch 404 and forward to error handler
	router.use(function(req, res, next) {
		const err = new Error('Not Found');
		err.status = 404;
        logger.error('404 error not found');
		next(err);
    });
    
    //middle-ware
    router.use(function(req, res, next) {
        logger.trace(req.method, req.url);
        // continue doing what we were doing and go to the route
        next();
    });

    return router;
}