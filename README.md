# REAL TIME CHAT APPLICATION

*COMPANY* - CODTECH IT SOLUTIONS

*NAME* - AVNEET ANAND

*INTERN ID* - CT08SBW

*DOMAIN* - MERN STACK WEB DEVELOPMENT

*DURATION* - 4 WEEKS

*MENTOR* - NEELA SANTOSH


#### PROJECT DESCRIPTION #######

Created a real-time chat application using Socket.IO, React,cors and Express. Setup allows for efficient bi-directional communication between the client and server, making it ideal for real-time applications.

* Overview:
  - Backend: Node.js with express.js
  - Frontend: React.js, HTML, CSS
  - WebSocket Library: socket.io

1. Setting Up the Backend (Express and Socket.IO):
   - Create a folder "server" for the backend.
   - Initialize Node.js project and install the necessary dependencies like express, socket.io and cors.
   - Create a file "index.js" in server folder.
   - Create a basic Express server and integrate Socket.IO in that file.
   - Import the http module
   - Import the cors module for handling Cross-origin Resource Sharing
   - Import the server class from socket.io
   - Enable CORS for all routes
   - Create an HTTP server using the express app
   - Create a new instance of socket.io, allowing cross-origin requests from http://localhost:3000
   - Listen for incoming socket connections
   - Listen for a join_message event from the client
   - Emit the received message to all clients in the specified room
   - Notify other users in the room that the user has left
   - Start the server on port 3001.

2. Setting Up the Frontend (React and Socket.IO Client):
   - Create a folder "client" for the frontend.
   - Initialize React project and install Socket.IO client.
   - Create a "Chat.js" file to write all the codes related to chat.
     = In this file, The Chat component  takes three props that are socket, username and room.
     = Use useState hook to manage current message input and list
     = Write function to send a message, create a message data object, emit message data to the server, update message list with the new message
     = In components structure, I used paragraph,"SrollToBottom" for scrolling the chat, messageContent, message Content time,then footer and a button, when i click it 
      then message send.
   - In client folder, one file that name is "App.js".
      This is the main file in that i import "App.css", in that file i write all the css code. And import io,Chat and Socket.io.
      Create a socket connection to the server at localhost:3001
      useState hooks to manage username, room ID, and chat
      Use function to handle joining a room
      Set the showChat state to true to display the chat component
      Use condition to render: if showchat is false, display the join chat form.
      Update the username state, room state when the input value changes
      Use condition to render: if showchat is true, display the chat component.

  3. Features:
     - Real-time Messaging: Users can send and receive messages in real-time.
     - Room Management: Users can join specific chat rooms using room IDs.
     - User Notifications: Notify users when someone  leaves the chat.

  4. Summary:
     - Backend: Handles socket connections, message broadcasting, and user disconnections using Express and Socket.IO.
     - Frontend: Manages user input, real-time message display, and room management using React and Socket.IO client.
    

  ### OUTPUT #####

  ![Image](https://github.com/user-attachments/assets/5b4cd3dd-c144-49e9-b040-bf207b6ed0e6)
![Image](https://github.com/user-attachments/assets/87fd8adc-af10-4fdc-8619-b81ddfc51d46)
![Image](https://github.com/user-attachments/assets/676b8b94-5266-4f6c-a9e9-80eb309623af)
![Image](https://github.com/user-attachments/assets/336cd05e-fc83-4ab7-99e8-047a5d9ba378)
![Image](https://github.com/user-attachments/assets/99515c65-15cc-4ad0-b7ce-0aa624e6483d)
  
     
   
  
