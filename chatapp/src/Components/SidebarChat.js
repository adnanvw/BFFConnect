import React, { useEffect, useRef, useState } from 'react'
import './SidebarChat.css'
import axios from 'axios'
import { io } from "socket.io-client"

function SidebarChat({ chatroomtile, currentUser }) {

    const [user, setUser] = useState(null)
    const [online, setOnline] = useState(false);
    const socket = useRef()

    const API_URL = process.env.REACT_APP_API_URL

    useEffect(() => {
        socket.current = io(API_URL);
    }, [API_URL])

    useEffect(() => {
        const BFFConnectId = chatroomtile.members.find((m) => m !== currentUser._id);
        socket.current.on("getUsers", (users) => {
            setOnline(users.find((user) => user.userId === BFFConnectId));
        })
        const getBFFConnectdetails = async () => {
            try {
                const response = await axios.get(API_URL + 'api/users/' + BFFConnectId)
                setUser(response.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        getBFFConnectdetails()
    }, [currentUser, chatroomtile, online, API_URL])

    return (
        <div className='sidebarchat'>
            <img className='BFFConnect-profilepic' src={user?.photo ? API_URL + "photo/" + user?.photo : "assets/noavatar.jpg"} alt='' />
            <div className={online ? "online" : "offile"}></div>
            <p className="sidebarchat-info-name">{user != null ? user.username : ""}</p>
        </div>
    )
}

export default SidebarChat