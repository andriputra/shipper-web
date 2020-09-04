import React, { Component } from "react";
import './style.scss';

export default class ContentLayout extends Component {
    render() {
        return(
            <div className="content-area">
                {this.props.children}
            </div>
        )
    }
}