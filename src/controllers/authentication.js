const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const config = require('../config');


const authenticate = (req, res) => {
	let user = {
		name:'Pablo Rodriguez',
		email:'hello@prodz.me'
	};

	const token = jwt.sign(user, config.secret, {
		expiresIn: '2y'
	});

	user.token = token;

	return res.status(200).send({
		status:200,
		result:true,
		response:user
	});
}

export {authenticate};
