
//Include the mysql plugin
var mysql = require('mysql');


// Setup the mysql connection

var connection = mysql.createConnection({

	host 		: 'localhost',
	user 		: 'root',
	password	: 'password',
	database 	: 'apidb'
});

// Connect to call a query

connection.connect(function(err){
	if (err){
		console.error('Database connection error: ' + err.stack);
		return;
	}
	else{
		console.log('mysql database started');
	}
});

// export this modules, then only we can use this in other fiels

module.exports = {
	connection: connection
}