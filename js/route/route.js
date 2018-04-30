'use strict';
var controller = require('../controller/dbHandler');

module.exports = function(router){

    router.get('/',(req,res,next) => {
        var promise = controller.findByGender(req);
        promise.then((data)=>{
           console.log(data);
        });
        res.json({"message":"found it"});
    });

    router.post('/save',(req,res,next) => {
        var promise = controller.insertWithData(req);
        promise.then((data)=>{
            res.Json({'status':data});
        })
    });

    // catch 404 and forward to error handler
	router.use(function(req, res, next) {
		const err = new Error('Not Found');
		err.status = 404;
    logger.error('404 error not found');
		next(err);
	});
    return router;
}