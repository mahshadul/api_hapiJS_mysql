
// =============== Routes for the API =======================


// Define GET route

exports.register = function(server, options, next)
{

	//Option 1

	server.route([{
		method: 'GET', //the method
		path: '/user',


		handler: function(request, reply){
			
			reply('Welcome to my first hapi app: Now using plugins!!');

		}
	}]);

	next();
}

exports.register.attributes = {
	name: 'user-route',
	version : '0.0.1'
};
