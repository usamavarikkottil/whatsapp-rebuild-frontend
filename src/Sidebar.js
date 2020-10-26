import { Avatar, IconButton } from '@material-ui/core'
import { ChatRounded, DonutLargeRounded, MoreVertRounded, SearchRounded } from '@material-ui/icons'
import React, { PureComponent } from 'react'
import "./Sidebar.css"
import SidebarChat from "./SidebarChat.js";

export class Sidebar extends PureComponent {
    render() {
        return (
            <div className="sideBar">
                <div className="sideBar__top">
                    <div className="sideBar__top__left">

                        <Avatar src="https://avatars1.githubusercontent.com/u/39443352?s=460&u=b32a803549c813238c262e1efc3397f9f1ccb822&v=4" />
                    </div>
                    <div className="sideBar__top__right">
                        <IconButton>

                            <DonutLargeRounded />
                        </IconButton>

                        <IconButton>
                            <ChatRounded />
                        </IconButton>

                        <IconButton>
                            <MoreVertRounded />
                        </IconButton>
                    </div>

                </div>

                <div className="sideBar__search">


                    <div className="sideBar__search__container">

                        <SearchRounded />
                        <input type="text" placeholder="Search or start a new chat" />
                    </div>

                </div>

                <div className="sidebar-chats">


                    <SidebarChat />
                    <SidebarChat />
                    <SidebarChat />
                    <SidebarChat />
                    <SidebarChat />
                    <SidebarChat />
                    <SidebarChat />
                    <SidebarChat />
                    <SidebarChat />
                </div>
            </div>
        )
    }
}

export default Sidebar
