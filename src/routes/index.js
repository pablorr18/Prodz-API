const portfolioController = require('../controllers').portfolio;
const authenticationController = require('../controllers').authentication;

module.exports = (app) => {
	//PORTFOLIO
	app.get('/api/portfolio', portfolioController.list);
	app.get('/api/portfolio/:id', portfolioController.retrieve);
	//app.post('/api/portfolio', portfolioController.create);

	//AUTHENTICATION
	//app.get('/token/authentication', authenticationController.authenticate);
}