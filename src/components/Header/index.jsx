import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import './style.scss';
import { slide as Menu } from 'react-burger-menu'
import SideMenu from "../SideMenu";

export default class Header extends Component {
    render() {
        return(
            <div className="header-bar">
                <div className="header-bar-left">
                    <div className="show-xs mobile-menu">
                        <Menu>
                            <div className="side-menu-list">
                                <ul className="menu">
                                    <li><NavLink exact to="/"><i className="i icon-home"></i> Beranda</NavLink></li>
                                    <li><NavLink exact to="/Management"><i className="i icon-user"></i>Driver Management</NavLink></li>
                                    <li><NavLink exact to="/Pickup"><i className="i icon-calendar"></i>Pickup</NavLink></li>
                                </ul>
                            </div>
                        </Menu>
                    </div>
                    <NavLink exact to="/">
                        <img src={require('../../assets/img/logo.png')} alt="logo" className="img-fluid logo-img"/>
                    </NavLink>
                </div>
                <div className="header-bar-right">
                    <div className="user-data">
                        <span>Hello,</span>
                        <span className="user-name">Shipper User</span>
                        <span className="user-avatar">
                            <img src={require('../../assets/img/userprofile.png')} alt="user profile" className="img-fluid avatar-img"/>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}