import { Avatar } from '@material-ui/core';
import React from 'react';
import "./SidebarChat.css";

function SidebarChat() {
    return (

        <div className="sideBar__chat_contact">
            <div className="sideBar__chat__contact__icon">
                <Avatar src="https://avatars1.githubusercontent.com/u/39443352?s=460&u=b32a803549c813238c262e1efc3397f9f1ccb822&v=4" />
            </div>
            <div className="sideBar__chat__details">
                <div className="sideBar__chat__contact__details">
                    <h3 className="sideBar__chat__contact__details__name">Usama Varikkottil</h3>
                    <p class="sideBar__chat__contact__details__time">10:22 AM</p>
                </div>

                <p className="sideBar__chat__contact__details__message"> Hai, How are you? Usama Varikkottil</p>

            </div>

        </div>
    )
}

export default SidebarChat;