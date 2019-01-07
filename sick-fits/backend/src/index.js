require('dotenv').config({ path: 'variables.env'});
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

//TODO Use express middleware to handle cookies 
//TODO Use express to populate current users
server.start({
  cors: {
    credentials: true,
    origin: process.env.FRONTEND_URL
  },
}, deets => {
  console.log(`Server is running on http:/localhost:${deets.port}`);
});