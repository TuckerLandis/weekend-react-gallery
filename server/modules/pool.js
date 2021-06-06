// // Node Module that will connect to postgesql
// const pg = require('pg');
// let config = {};

// // Setup PG to connect to the database
// const Pool = pg.Pool;


// if (process.env.DATABASE_URL) {
//   config = {
//     // We use the DATABASE_URL from Heroku to connect to our DB
//     connectionString: process.env.DATABASE_URL,
//     // Heroku also requires this special `ssl` config
//     ssl: { rejectUnauthorized: false },
//   };
// } else {
//   // If we're not on heroku, configure PG to use our local database
//   config = {
//     host: 'localhost',
//     port: 5432,
//     database: 'react_gallery', // CHANGE THIS LINE to match your local database name!
//   };
// }
// // const pool = new Pool({
// //     database: 'react_gallery', // database name (this will change)
// //     host: 'localhost', // where to find the database
// //     port: 5432,        // port for finding the database
// //     max: 10,           // max number of connections for the pool
// //     idleTimeoutMillis: 30000 // 30 seconds before timeout/cancel query
// // });

// const pool = new pg.Pool(config);

// // Listener setup on the pool isn't required, 
// // but can be super handy for troubleshooting.
// pool.on('connect', () => {
//     console.log('Connected to the database');
// });

// pool.on('error', (error) => {
//     console.log('Error with database pool', error);
// });

// module.exports = pool;

// /**
// * You'll need to use environment variables in order to deploy your
// * pg-pool configuration to Heroku.
// * It will look something like this:
// **/
// /* the only line you likely need to change is
//  database: 'prime_app',
//  change `prime_app` to the name of your database, and you should be all set!
// */
// // const pg = require('pg');
// // const url = require('url');
// // let config = {};
// // // We need a different pg configuration if we're running
// // // on Heroku, vs if we're running locally.
// // //
// // // Heroku gives us a process.env.DATABASE_URL variable,
// // // so if that's set, we know we're on heroku.
// // if (process.env.DATABASE_URL) {
// //   config = {
// //     // We use the DATABASE_URL from Heroku to connect to our DB
// //     connectionString: process.env.DATABASE_URL,
// //     // Heroku also requires this special `ssl` config
// //     ssl: { rejectUnauthorized: false },
// //   };
// // } else {
// //   // If we're not on heroku, configure PG to use our local database
// //   config = {
// //     host: 'localhost',
// //     port: 5432,
// //     database: 'react_gallery', // CHANGE THIS LINE to match your local database name!
// //   };
// // }
// // // this creates the pool that will be shared by all other modules
// // const pool = new pg.Pool(config);
// // // the pool will log when it connects to the database
// // pool.on('connect', () => {
// //   console.log('Postgresql connected');
// // });
// // // the pool with emit an error on behalf of any idle clients
// // // it contains if a backend error or network partition happens
// // pool.on('error', (err) => {
// //   console.log('Unexpected error on idle client', err);
// //   process.exit(-1);
// // });
// // module.exports = pool;
//--------------------------------------------------------------
// Node Module that will connect to postgesql
const pg = require('pg');

// Setup PG to connect to the database
const Pool = pg.Pool;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },

    database: 'react_gallery', // database name (this will change)
    host: '0.0.0.0', // where to find the database
    port: 5432,        // port for finding the database
    max: 10,           // max number of connections for the pool
    idleTimeoutMillis: 30000 // 30 seconds before timeout/cancel query
});

// Listener setup on the pool isn't required, 
// but can be super handy for troubleshooting.
pool.on('connect', () => {
    console.log('Connected to the database');
});

pool.on('error', (error) => {
    console.log('Error with database pool', error);
});

module.exports = pool;