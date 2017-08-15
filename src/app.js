const cors = require('cors');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const config = require('./config');
const bcrypt = require('bcrypt');


// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

//Enable All CORS Requests
app.use(cors());

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//PRIVATE KEY FOR API TOKENS
app.set('private_key', config.secret);

/*
//Middleware: Verify API Token access
app.use('/api', function(req,res,next){
	var token = req.body.token || req.query.token || req.headers['x-access-token'];

	if(token){
		jwt.verify(token, app.get('private_key'), function(err,decoded){
			if(err){
				return res.status(403).send({
					status: 403,
					result:false,
					message:'Failed to authenticate token.',
					error:err
				});
			}
			else{
				res.decoded = decoded;
				next();
			}
		});
	}
	else{
		return res.status(403).send({
			status: 403,
			result:false,
			message:'No token provided.'
		});
	}
});
*/

//MAIN ROUTES
require('./routes')(app);

// CATCH-ALL ROUTE
app.get('*', (req, res) => res.status(200).send({
	status:200,
	message: 'Welcome to PRODZ:API',
}));

module.exports = app;