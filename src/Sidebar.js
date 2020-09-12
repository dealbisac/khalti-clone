import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import { Avatar } from '@material-ui/core';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import VerticalSplitIcon from '@material-ui/icons/VerticalSplit';
import DateRangeIcon from '@material-ui/icons/DateRange';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';
import CardGiftcardOutlinedIcon from '@material-ui/icons/CardGiftcardOutlined';
import LoyaltyOutlinedIcon from '@material-ui/icons/LoyaltyOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import SimCardOutlinedIcon from '@material-ui/icons/SimCardOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined';
import HowToVoteIcon from '@material-ui/icons/HowToVote';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__info">
                <Avatar src="https://scontent.fktm8-1.fna.fbcdn.net/v/t31.0-8/18671644_1435011846555951_2725551300143052066_o.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=s8VAYODIolcAX-oyAau&_nc_ht=scontent.fktm8-1.fna&oh=b4ee544b48aeb0ad8bf85244a47df127&oe=5F820EF1" />
                <h5>Dipendra Bdr. Chand</h5>
                <p>chand.dipendra19@gmail.com</p>
                <p>9843681599</p>
            </div>
            <div className="sidebar__menu">
                <SidebarRow Icon={HomeOutlinedIcon} title="Home" />
                <SidebarRow Icon={LocalMallOutlinedIcon} title="Bazaar" />
                <SidebarRow Icon={VerticalSplitIcon} title="Services" />
                <SidebarRow Icon={DateRangeIcon} title="Bookings" />
                <SidebarRow Icon={PersonOutlineOutlinedIcon} title="Account" />
                <SidebarRow Icon={AccountBalanceWalletOutlinedIcon} title="Wallet" />
                <SidebarRow Icon={AccountBalanceOutlinedIcon} title="Bank Link" />
                <SidebarRow Icon={QueryBuilderOutlinedIcon} title="Transaction History" />
                <SidebarRow Icon={CardGiftcardOutlinedIcon} title="Coupon" />
                <SidebarRow Icon={LoyaltyOutlinedIcon} title="Loyalty" />
                <SidebarRow Icon={SendOutlinedIcon} title="Referral" />
                <SidebarRow Icon={SimCardOutlinedIcon} title="Sim" />
                <SidebarRow Icon={MonetizationOnOutlinedIcon} title="My Earnings" />
                <SidebarRow Icon={EqualizerOutlinedIcon} title="My Limits" />
                <SidebarRow Icon={HowToVoteIcon} title="Voting" />
            </div>
        </div>
    );
}

export default Sidebar;
