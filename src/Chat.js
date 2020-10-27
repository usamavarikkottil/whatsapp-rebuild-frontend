import { Avatar, IconButton } from '@material-ui/core';
import { MoreVertRounded, SearchRounded } from '@material-ui/icons';
import React from 'react'
import "./Chat.css"

function Chat() {
    return (
        <div className="chat">
            <div className="chat__top">
                <div className="chat__top__left">
                    <div className="chat__contact__icon">
                        <Avatar src="https://avatars1.githubusercontent.com/u/39443352?s=460&u=b32a803549c813238c262e1efc3397f9f1ccb822&v=4" />

                    </div>
                    <div className="chat__contact">
                        <h3 className="chat__contact__name">Usama Varikkottil</h3>
                        <p class="chat__contact__lastseen">Last seen today at 10:22 AM</p>
                    </div>

                </div>

                <div className="chat__top__right">

                    <IconButton>
                        <SearchRounded />
                    </IconButton>

                    <IconButton>
                        <MoreVertRounded />
                    </IconButton>
                </div>

            </div>
        </div>
    )
}

export default Chat;
