const portfolioController = require('../controllers').portfolio;

module.exports = (app) => {
	//PORTFOLIO
	app.get('/api/portfolio', portfolioController.list);
	app.get('/api/portfolio/:id', portfolioController.retrieve);
	//app.post('/api/portfolio', portfolioController.create);
}