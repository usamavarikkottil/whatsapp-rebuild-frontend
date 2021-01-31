import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, MicOutlined, MoreVertRounded, SearchRounded } from '@material-ui/icons';
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
                        <p className="chat__contact__lastseen">Last seen today at 10:22 AM</p>
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


            <div className="chat__center">
                <div className="chat__message received__message">
                    <h3 className="sender__name"> Usama V</h3>
                    <p className="message">Hey, What's up? <span className="chat__timestamp">10:34 AM</span></p>
                </div>

                <div className="chat__message received__message">
                    <h3 className="sender__name"> Usama V</h3>
                    <p className="message">Hey, What's up? <span className="chat__timestamp">10:34 AM</span></p>
                </div>

                <div className="chat__message sent__message">
                    <h3 className="sender__name"> Usama V</h3>
                    <p className="message">Hey, What's up?  <span className="chat__timestamp">10:34 AM</span></p>
                </div>

                <div className="chat__message received__message">
                    <h3 className="sender__name"> Usama V</h3>
                    <p className="message">Hey, What's up? <span className="chat__timestamp">10:34 AM</span></p>
                </div>

                <div className="chat__message received__message">
                    <h3 className="sender__name"> Usama V</h3>
                    <p className="message">Hey, What's up? <span className="chat__timestamp">10:34 AM</span></p>
                </div>

                <div className="chat__message received__message">
                    <h3 className="sender__name"> Usama V</h3>
                    <p className="message">Hey, What's up? This is the Last message <span className="chat__timestamp">10:34 AM</span></p>
                </div>

            </div>




            <div className="chat__bottom">

                <IconButton>
                    <InsertEmoticon />
                </IconButton>
                <IconButton>
                    <AttachFile />
                </IconButton>

                <div className="new__message__input">


                    <input type="text" placeholder="Type a message" />
                </div>

                <IconButton>
                    <MicOutlined />
                </IconButton>







            </div>
        </div>
    )
}

export default Chat;
