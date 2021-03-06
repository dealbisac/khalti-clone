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
import { useStateValue } from './StateProvider';

function Sidebar() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="sidebar">
            <div className="sidebar__info">
                <Avatar src={user.photoURL} />
                <h5>{user.displayName}</h5>
                <p>{user.email}</p>
                <p>{user.phone ? user.phone : '9843-XXXXX'}</p>
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
