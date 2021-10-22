import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Contacts from "./side-item/Contacts";
import Discussions from "./side-item/Discussions";
import Notifications from "./side-item/Notifications";
import Settings from "./side-item/Settings";

function Sidebar() {
    return (
        <div className="sidebar" id="sidebar">
            <div className="container">
                <div className="col-md-12">
                    <div className="tab-content">
                        <Contacts></Contacts>
                        <Notifications></Notifications>
                        <Settings></Settings>
                        <Discussions></Discussions>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;