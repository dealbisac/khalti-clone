import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsOutlinedNoneIcon from '@material-ui/icons/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

function Header() {
    return (
        <div className="header">
            {/* Logo */}
            <div className="header__logo">
                <img
                    src="https://d7vw40z4bofef.cloudfront.net/static/img/khaltilogo.svg"
                    alt="logo"
                />
            </div>

            {/* Search Bar */}
            <div className="header__search">
                <input
                    type="text"
                    placeholder="Search your query..."
                    autoComplete="off"
                />
                <SearchIcon />

            </div>

            {/* App Right Notification */}
            <div className="header__right">
                <div className="header__info">
                    <span> <NotificationsOutlinedNoneIcon /> </span>
                    <span> <SettingsOutlinedIcon /> </span>
                </div>
            </div>
        </div >
    )
}

export default Header;
