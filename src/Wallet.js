import React from 'react';
import './Wallet.css';
import PhoneInTalkOutlinedIcon from '@material-ui/icons/PhoneInTalkOutlined';
import PhoneCallbackOutlinedIcon from '@material-ui/icons/PhoneCallbackOutlined';
import PhoneIphoneOutlinedIcon from '@material-ui/icons/PhoneIphoneOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import TrackChangesOutlinedIcon from '@material-ui/icons/TrackChangesOutlined';
import LoyaltyOutlinedIcon from '@material-ui/icons/LoyaltyOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';


function Wallet() {
    return (
        <div className="wallet">
            <div className="wallet__top">
                <h5>
                    TOTAL BALANCE
                    <button>Load Fund</button>
                    <p>Rs.<span>6353</span></p>
                </h5>
                <div className="wallet__top-one">
                    <AccountBalanceWalletOutlinedIcon />
                    <span>
                        MAIN BALANCE
                    <p>Rs. <span>6353</span></p>
                    </span>
                </div>
                <div className="wallet__top-two">
                    <LoyaltyOutlinedIcon />
                    <span>
                        BONUS BALANCE
                    <p>Rs. <span>635</span></p>
                    </span>
                </div>
                <div className="wallet__top-three">
                    <TrackChangesOutlinedIcon />
                    <span>
                        KHALTI POINTS
                    <p>856</p>
                    </span>
                </div>
            </div>

            <div className="wallet__bottom">
                <h5>CONTACT</h5>
                <p><PhoneInTalkOutlinedIcon /> 01-5970017</p>
                <p><PhoneCallbackOutlinedIcon /> 1660-01-5-8888 (Toll Free)</p>
                <p><PhoneIphoneOutlinedIcon /> 9801165561</p>
                <p><EmailOutlinedIcon /> support@khalti.com</p>
                <p><ContactSupportOutlinedIcon />FAQs</p>
            </div>
        </div>
    );
}

export default Wallet;
