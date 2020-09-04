import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import './style.scss';

export default class Header extends Component {
    render() {
        return(
            <div className="header-bar">
                <div className="header-bar-left">
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