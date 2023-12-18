
// import json-server package
const jsonServer = require('json-server');
// create json server
const mediaPlayerServer = jsonServer.create();
// create a connection to db.json file
const router = jsonServer.router('db.json');
// setup middleware to handle request and response
const middleware = jsonServer.defaults();
// use this middleware.
mediaPlayerServer.use(middleware);
mediaPlayerServer.use(router);
// start the server on port 3001
const port = 3001;
mediaPlayerServer.listen(port, () => {
    console.log(`Media Player Server is running at http://localhost:${port}`);
})




