import React from "react";
import "./EmptyChatRoom.css";

function EmptyChatRoom() {
  return (
    <div>
      <div className="EmptyChatroom">
        <img className="emptychatroom-img"
          src="assets/home.png"
          alt=""
        ></img>
        <p className="empty-chatroom-mainhead">Start Chatting with Your BFF🤝</p>
        <p className="empty-chatroom-subhead">
         Add BFF by username from the option in the top right corner of the page.
        </p>
      </div>
    </div>
  );
}

export default EmptyChatRoom;
