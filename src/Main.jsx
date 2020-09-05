import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import ContentLayout from "./components/Content/Layout";
import Home from "./components/Content/Home";
import Management from "./components/Content/Management";
import Pickup from "./components/Content/Pickup";

class Main extends Component {
    showSettings (event) {
        event.preventDefault();
    }
    render() {
        return (
            <HashRouter>
                <Header />
                <SideMenu />
                <ContentLayout>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Management" component={Management} />
                    <Route exact path="/Pickup" component={Pickup} />
                </ContentLayout>
            </HashRouter>
        );
    }
}

export default Main;