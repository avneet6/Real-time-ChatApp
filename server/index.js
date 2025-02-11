const express = require("express"); // Import the express module
const app = express(); // Create an instance of express
const http = require("http"); // Import the http module
const cors = require("cors"); // Import the cors module for handling Cross-Origin Resource Sharing
const { Server } = require("socket.io"); // Import the Server class from socket.io
app.use(cors()); // Enable CORS for all routes 

// Create an HTTP server using the express app
const server = http.createServer(app);

// Create a new instance of socket.io, allowing cross-origin requests from http://localhost:3000
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// Store usernames
const users = {};

// Listen for incoming socket connections
io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`); // Log when a user connects

  // Listen for a join_message event from the client
  socket.on("join_room", (data) => {
    socket.join(data);
    
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    // Emit the received message to all clients in the specified room
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log(`User Disconnected: ${socket.id}`); // Log when a user disconnects
    const username = users[socket.id];
    delete users[socket.id]; // Remove the user from the store
    // Notify other users in the room that the user has left
    socket.broadcast.emit("user_left", `${username || 'A user'} has left the chat`);
  });


});
  
// Start the server on port 3001
server.listen(3001, () => {
  console.log("SERVER RUNNING");
});