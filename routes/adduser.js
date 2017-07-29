
// POST, Validate JOI module and Save

//Include the database file and get the db object
const db = require('../database.js'); 

//Include the joi module for validation
const Joi = require('joi')

//Define POST route

exports.register = function(server, options, next)
{
	server.route([{

		method: 'POST',
		path: '/adduser',
		config :{
			tags : ['api'], //include this api in swagger documentiaon

			// Now we are using JOI plugin to validate request

			validate:{
				payload: {
					//Both name and id are required fields and I have created local Database table with those fields

					name: Joi.string().required(),
					id: Joi.number().required()

				}

			}

		},

		handler: function(request,reply)
		{
			var post = {name:request.payload.name,id:request.payload.id};
			db.connection.query(
				'INSERT INTO apiuser set?',post,
				function(err, rows){
					reply([{
						statusCode: 200,
						message: 'Data has inserted successfully',
					}]);

					if(err) {
						throw new Error(err)
					}
				}
				)
		}
	}]);
	next();

};


exports.register.attributes = {
	name 	: 'adduser-route',
	version : '0.0.1'
};



// Here, we included our db file and joi module. We created a new route for adding  
// user details to our db table based on user input name and id. Both the fileds here, 
//namely, id and name are required ones, we  use joi module for validation. 
//Set that in config portion inside the route. “payload” refers to the name of array 
//that holds the values. When we call this adduser api without the name/id or any 
//invalid value then we will get the error message (Joi ). 
//Note that Joi will not work with GET method.

// For saving to db , we collect the values corresponding to each filed and call 
//mysql query with the help of db object and return a success message.

// Now we have our adduser.js ready. Save this in same root folder where we have 
//package.json,app.js and user.js.

// Need to register this plugin in our index.js






