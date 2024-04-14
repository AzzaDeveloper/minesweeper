const express = require('express');
const path = require('path');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
// Info
const port = 3000;
// Serving static files
app.use(express.static('assets'))
// Delivering main website
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
// Listening to port
server.listen(port, () => {
  console.log(`Listening on *: ${port}`);
});