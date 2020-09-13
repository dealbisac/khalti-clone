import React from 'react';
import './Content.css';
import Slider from "./Slider";
import Services from './Services';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import MobileScreenShareIcon from '@material-ui/icons/MobileScreenShare';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import PhoneIphoneTwoToneIcon from '@material-ui/icons/PhoneIphoneTwoTone';
import PauseCircleOutlineOutlinedIcon from '@material-ui/icons/PauseCircleOutlineOutlined';
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined';
import RingVolumeOutlinedIcon from '@material-ui/icons/RingVolumeOutlined';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import OpacityOutlinedIcon from '@material-ui/icons/OpacityOutlined';
import LiveTvOutlinedIcon from '@material-ui/icons/LiveTvOutlined';
import RouterOutlinedIcon from '@material-ui/icons/RouterOutlined';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined';
import MotorcycleOutlinedIcon from '@material-ui/icons/MotorcycleOutlined';
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
import CalendarViewDayOutlinedIcon from '@material-ui/icons/CalendarViewDayOutlined';
import LocalAtmOutlinedIcon from '@material-ui/icons/LocalAtmOutlined';
import ScreenShareOutlinedIcon from '@material-ui/icons/ScreenShareOutlined';
import SecurityIcon from '@material-ui/icons/Security';
import PaymentTwoToneIcon from '@material-ui/icons/PaymentTwoTone';
import DirectionsBusOutlinedIcon from '@material-ui/icons/DirectionsBusOutlined';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import FlightTakeoffOutlinedIcon from '@material-ui/icons/FlightTakeoffOutlined';
import ConfirmationNumberOutlinedIcon from '@material-ui/icons/ConfirmationNumberOutlined';



function Content() {
    return (
        <div className="content">
            <div className="content__title">
                <span><AccountBalanceWalletOutlinedIcon /> <p>LOAD</p> </span>
                <span><MobileScreenShareIcon /> <p>TRANSFER</p> </span>
                <span><MonetizationOnOutlinedIcon /> <p>REMITTANCE</p> </span>
                <span><AccountBalanceOutlinedIcon /> <p>BANK TRANSFER</p> </span>
            </div>

            <div className="content__main">
                <Slider src={require('./slider/slider-top.JPG')} />

                <div className="content__main-services">
                    <div className="content__main-servicesone">
                        <h5>Utility Payments</h5>
                        <div className="content__main-servicesrow">
                            <Services Icon={PhoneIphoneTwoToneIcon} title="Topup" discount="2.5-3.8%" />
                            <Services Icon={PauseCircleOutlineOutlinedIcon} title="Data Pack" discount="2%" />
                            <Services Icon={PaymentOutlinedIcon} title="RC Card" discount="3.5-6.5%" />
                            <Services Icon={RingVolumeOutlinedIcon} title="Landline" discount="3.8%" />
                            <Services Icon={EmojiObjectsOutlinedIcon} title="Electricity" discount="" />
                            <Services Icon={OpacityOutlinedIcon} title="Khanepani" discount="" />
                        </div>
                        <div className="content__main-servicesrow">
                            <Services Icon={LiveTvOutlinedIcon} title="TV" discount="0.8-3.2%" />
                            <Services Icon={RouterOutlinedIcon} title="Internet" discount="0.9-3.8%" />
                            <Services Icon={SchoolOutlinedIcon} title="School Fee" discount="" />
                            <Services Icon={VerifiedUserOutlinedIcon} title="Antivirus" discount="15-30%" />
                            <Services Icon={MotorcycleOutlinedIcon} title="Ride" discount="" />
                            <Services Icon={AcUnitOutlinedIcon} title="COVID-19 Insurance" discount="" />
                        </div>
                        <div className="content__main-servicesrow">
                            <Services Icon={CalendarViewDayOutlinedIcon} title="EMI" discount="2.5%" />
                        </div>
                    </div>

                    <div className="content__main-servicesone">
                        <h5>Financial Services</h5>
                        <div className="content__main-servicesrow">
                            <Services Icon={LocalAtmOutlinedIcon} title="Loan" discount="" />
                            <Services Icon={ScreenShareOutlinedIcon} title="DEMAT MeroShare" discount="" />
                            <Services Icon={SecurityIcon} title="Insurance" discount="" />
                            <Services Icon={PaymentTwoToneIcon} title="Credit Card" discount="" />
                        </div>
                        <Slider src={require('./slider/slider-middle.JPG')} />
                    </div>

                    <div className="content__main-servicesone">
                        <h5>Bookings</h5>
                        <div className="content__main-servicesrow">
                            <Services Icon={FlightTakeoffOutlinedIcon} title="Flight" discount="" />
                            <Services Icon={ConfirmationNumberOutlinedIcon} title="Movie" discount="1%" />
                            <Services Icon={DirectionsBusOutlinedIcon} title="Bus Ticket" discount="" />
                            <Services Icon={ThumbUpOutlinedIcon} title="Voting" discount="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Content;
