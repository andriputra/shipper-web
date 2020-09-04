import React, { Component } from "react";
import SearchBar from "../Search";

export default class Management extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        // fetch("https://randomuser.me/api/?results=5")
        fetch('https://randomuser.me/api/?page=${toPage}&seed=qwer&results=5')
            .then(res => res.json())
            .then(parsedJSON => parsedJSON.results.map(data => (
                {
                    id: `${data.id.value}`,
                    firstName: `${data.name.first}`,
                    lastName: `${data.name.last}`,
                    phone: `${data.cell}`,
                    thumbnail: `${data.picture.large}`,
                    email: `${data.email}`,
                    dob: `${data.dob.date}`,
                }
            )))
            .then(items => this.setState({
                items,
                isLoaded: false
            }))
            .catch(error => console.log('parsing failed', error))
    }

    render() {
        const { items } = this.state;
        return (
            <React.Fragment>
                <SearchBar/>
                <div className="item">
                    {
                        items.length > 0 ? items.map(item => {
                            const { id, thumbnail, firstName, lastName, phone, email, dob } = item;
                            return (
                                <div className="item-content" key={id}>
                                    <div className="item-content-title">
                                        <div className="driver-id">
                                            <span>Driver ID</span>
                                            <span className="text-red">{id}</span> 
                                        </div>
                                        <div className="menu-item">
                                            ...
                                        </div>
                                    </div>
                                    <div className="item-content-desc">
                                        <img src={thumbnail} alt={firstName} className="circle img-fluid"/>
                                        <div className="driver-description">
                                            <div className="driver-label-group">
                                                <span className="label">Nama Driver</span>
                                                <span className="label-desc">{firstName},{lastName}</span>
                                            </div>
                                            <div className="driver-label-group">
                                                <span className="label">Telepon</span>
                                                <span className="label-desc">{phone}</span>
                                            </div>
                                            <div className="driver-label-group show-lg hidden-xs">
                                                <span className="label">Email</span>
                                                <span className="label-desc">{email}</span>
                                            </div>
                                            <div className="driver-label-group show-lg hidden-xs">
                                                <span className="label">Tanggal Lahir</span>
                                                <span className="label-desc">{dob}</span>
                                            </div>
                                            <div className="driver-label-group hidden-lg show-xs">
                                                <span className="label">Email</span>
                                                <span className="label-desc">{email}</span>
                                            </div>
                                            <div className="driver-label-group hidden-lg show-xs">
                                                <span className="label">Tanggal Lahir</span>
                                                <span className="label-desc">{dob}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }) : null
                    }
                </div>
            </React.Fragment>
        );

    }
}
