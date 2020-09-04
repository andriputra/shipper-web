import React, { Component } from "react";
import './style.scss';
import SearchInput from './SearchInput';

export default class SearchBar extends Component {
    render() {
        return(
            <div className="search-bar-area">
                <div className="search-bar-area-title">
                    <h2>DRIVER MANAGEMENT</h2>
                    <p>Data driver yang bekerja dengan Anda.</p>
                </div>
                <div className="search-bar-area-action">
                    <SearchInput/>
                    <button type="button" className="button-submit">
                        Tambah Driver <i className="i icon-plus"></i>
                    </button>
                </div>
            </div>
        )
    }
}