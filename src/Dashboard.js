import React from 'react';

import Chat from './Chat';
import Sidebar from './Sidebar';
import "./Dashboard.css";
function Dashboard() {
    return (

        <div className="dashboard">
            <Sidebar />
            <Chat />

        </div>


    );
}

export default Dashboard;
