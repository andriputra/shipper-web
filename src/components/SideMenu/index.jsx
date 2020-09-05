import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import './style.scss';

export default class SideMenu extends Component {
    render() {
        return(
            <div className="side-menu hidden-xs">
                <div className="side-menu-list">
                    <ul className="menu">
                        <li><NavLink exact to="/"><i className="i icon-home"></i> Beranda</NavLink></li>
                        <li><NavLink exact to="/Management"><i className="i icon-user"></i>Driver Management</NavLink></li>
                        <li><NavLink exact to="/Pickup"><i className="i icon-calendar"></i>Pickup</NavLink></li>
                    </ul>
                </div>
            </div>
        )
    }
}