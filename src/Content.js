import React from 'react';
import './Content.css';
import Carousel from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import MobileScreenShareIcon from '@material-ui/icons/MobileScreenShare';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';

function Content() {
    return (
        <div className="content">
            <div className="content__title">
                <span>
                    <AccountBalanceWalletOutlinedIcon />
                    <p>LOAD</p>
                </span>
                <span>
                    <MobileScreenShareIcon />
                    <p>TRANSFER</p>
                </span>
                <span>
                    <MonetizationOnOutlinedIcon />
                    <p>REMITTANCE</p>
                </span>
                <span>
                    <AccountBalanceOutlinedIcon />
                    <p>BANK TRANSFER</p>
                </span>
            </div>

            <div className="content__main">

            </div>
        </div>
    );
}

export default Content;
