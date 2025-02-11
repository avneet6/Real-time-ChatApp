import "./App.css";
import io from "socket.io-client"; // Import socket.io-client for WebSocket communication
import { useState } from "react";
import Chat from "./Chat"; // Import the Chat component

// Create a socket connection to the server at localhost:3001
const socket = io.connect("http://localhost:3001");

function App() {
  // useState hooks to manage username, room ID, and chat
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  // Function to handle joining a room

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      // Emit the join_room event to the server with the room ID
      socket.emit("join_room", room);
      // Set the showChat state to true to display the chat component
      setShowChat(true);
    }
  };

  return (
    <div className="App">
      {!showChat ? (
        // Conditional rendering: if showChat is false, display the join chat form
        <div className="joinChatContainer">
          <h3>Join A Chat</h3>
          <input
            type="text"
            placeholder="Your Name"
            // Update the username state when the input value changes
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room ID..."
            // Update the room state when the input value changes
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />

          <button onClick={joinRoom}>Join A Room</button>
        </div>
      ) : (
        // Conditional rendering: if showChat is true, display the Chat component
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default App;