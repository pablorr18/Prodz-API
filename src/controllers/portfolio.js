const jsonfile = require('jsonfile');
const config = require('../config');
const file = config.database.portfolio;

const list = (req,res) => {
	jsonfile.readFile(file, (err, jsonData) => {
		if (err) throw err;

		return res.status(200).send({
			status:200,
			result:true,
			response:jsonData
		});
	});
}

const retrieve = (req,res) => {
	jsonfile.readFile(file, (err, jsonData) => {
		if (err) throw err;

		let pitem = null;

		jsonData.forEach( (item) => {
			if(item.id === parseInt(req.params.id)){
				pitem = item;
			}
		});

		if(pitem){
			return res.status(200).send({
				status:200,
				result:true,
				response:pitem
			});
		}
		else{
			return res.status(401).send({
				status:401,
				result:false,
				response:{}
			});
		}	
	});
}

export {list, retrieve};
