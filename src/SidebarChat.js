import { Avatar } from '@material-ui/core';
import React from 'react';
import "./SidebarChat.css";


function SidebarChat() {
    return (

        <div className="sideBar__chat_contact">
            <div className="sideBar__chat__contact__icon">
                <Avatar src="" />
            </div>
            <div className="sideBar__chat__details">
                <div className="sideBar__chat__contact__details">
                    <h3 className="sideBar__chat__contact__details__name">Groupish people</h3>
                    <p className="sideBar__chat__contact__details__time">10:22 AM</p>
                </div>

                <p className="sideBar__chat__contact__details__message"> Haha</p>

            </div>

        </div>
    )
}

export default SidebarChat;