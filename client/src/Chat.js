import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";

// The Chat component takes three props that are socket, username, and room
function Chat({ socket, username, room }) {
  // useState hook to manage current message input and list
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  // Function to send a message
  const sendMessage = async () => {
    if (currentMessage !== "") {
      // Create message data object
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      // Emit  message data to the server
      await socket.emit("send_message", messageData);
      // Update  message list with the new message
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };


  // Handle received messages and user_left events
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });

    socket.on("user_left", (message) => {
      const messageData = {
        room: room,
        author: username,
        message: message,
        time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
      };
      setMessageList((list) => [...list, messageData]);
    });

    return () => {
      socket.off("receive_message");
      socket.off("user_left");
    };
  }, [socket, room]);



  // The component's JSX structure
  return (
    <div className="chat-window">
      <div className="chat-header">
        <p>Live Chat</p>
      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messageList.map((messageContent) => {
            return (
              <div
                className="message"
                id={username === messageContent.author ? "other" : "you"}
              >
                <div>
                  <div className="message-content">
                    <p>{messageContent.message}</p>
                  </div>
                  <div className="message-meta">
                    <p id="time">{messageContent.time}</p>
                    <p id="author">{messageContent.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="Type a message"
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  );
}

export default Chat;