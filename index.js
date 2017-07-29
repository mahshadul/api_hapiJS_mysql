"use strict";


// ================ Base Setup ========================

// Hapi package, which will include Hapi framework
const Hapi = require('hapi');


// This include vision package
const Vision = require('vision');

// This include inert package
const Inert = require('inert');

// This include Hapi Swagger package
const HapiSwagger = require('hapi-swagger');

// include package.json file
const Pack = require('./package')

// Server Object to create server
const server = new Hapi.Server();

// Now establish a connection usign our server object and defining Port number
// PORT number
server.connection({
    host: 'localhost',
    port: 3000
});



//Register the user plugin

server.register(
    [

// register HapiSwagger and its dependancy
    Inert,
    Vision,
    HapiSwagger,
    // user plugin
         {

            register : require('./routes/user.js'), 
            options  : {
                message:'hello'
            }
 
       },

    // register  adduser.js

        {
            register : require('./routes/adduser.js'), 
            options  : {

            }
        },
        

    ]
);

// =============== Start the Server =======================

// Lets start the server

server.start(function () {

    console.log('Sample API server is running at:', server.info.uri);
});
