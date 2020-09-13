import React from 'react';
import './Content.css';
import Slider from "./Slider";
import Services from './Services';
import Payments from './Payments';
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
                        <div className="content__main-servicesrow" >
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

                    {/* Second Type of Service */}
                    <div className="content__main-servicestwo">
                        <h6>Food & Essentials <a href="#"> Show All</a></h6>
                        <div className="content__main-servicesrow">
                            <Payments image="https://s3-ap-southeast-1.amazonaws.com/khalti-customers/media/2020/8/30/0a8612806a8e45cda4cf0340fdd02a56.png" title="Aqua World" />
                            <Payments image="https://s3-ap-southeast-1.amazonaws.com/khalti-customers/media/2019/8/8/a351423f20ec4b2db80830f7ffbcab04.jpg" title="Cowmandu" />
                            <Payments image="https://scontent.fktm8-1.fna.fbcdn.net/v/t1.0-9/42978757_1068670783336424_1241988354547908608_n.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=GHEEvL1oLj8AX-NamPQ&_nc_ht=scontent.fktm8-1.fna&oh=c60da7a2480b19b4200fded61b774972&oe=5F820A66" title="Sajilo Byapar" />
                            <Payments image="https://s3-ap-southeast-1.amazonaws.com/khalti-customers/media/2020/1/3/ff450cdcacca4f3b96bf1135a48e4c53.png" title="Kathmandu Organics" />
                            <Payments image="https://scontent.fktm8-1.fna.fbcdn.net/v/t1.0-9/23795294_508657229508766_1890802368769082736_n.png?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=uwprMWKjZh0AX-NdyZe&_nc_ht=scontent.fktm8-1.fna&oh=09e9432db012d4e2ce411369c745eacf&oe=5F828DDE" title="DL Agro Suppliers" />
                        </div>
                    </div>

                    <div className="content__main-servicestwo">
                        <h6>Online forms & Registration Fees <a href="#">Show All</a></h6>
                        <div className="content__main-servicesrow">
                            <Payments image="https://s3-ap-southeast-1.amazonaws.com/khalti-customers/media/2020/7/27/caf37479085a4fd6be593bfd422d2337.jpg" title="KUSOM Form" />
                            <Payments image="https://saralnotes.com/wp-content/uploads/2019/11/SARALNOTESLOGO1-scaled.jpg" title="Saral Notes" />
                            <Payments image="https://s3-ap-southeast-1.amazonaws.com/khalti-customers/media/2020/8/4/5658ab817072461db2379e428d36f8c8.PNG" title="PEA" />
                            <Payments image="https://s3-ap-southeast-1.amazonaws.com/khalti-customers/media/2020/6/1/ae2a35f77c614d5b937dde062b7405a4.jpg" title="Mero Lagani" />
                            <Payments image="https://s3-ap-southeast-1.amazonaws.com/khalti-customers/media/2020/5/17/a354bbf848c8469590e4632b0a1968f0.png" title="New Edu Platform" />
                        </div>
                    </div>

                    <div className="content__main-servicestwo">
                        <h6>Vendor Payments - Send Money <a href="#">Show All</a></h6>
                        <div className="content__main-servicesrow">
                            <Payments image="https://s3-ap-southeast-1.amazonaws.com/khalti-customers/media/2020/1/23/37ba19b4fa6d4312b803beb14efbde7a.png" title="Sparrow SMS" />
                            <Payments image="https://s3-ap-southeast-1.amazonaws.com/khalti-customers/media/2020/7/29/dcf68bac5b8a4f1699e6780f36355c70.jpg" title="Himalayan Arabica" />
                            <Payments image="https://s3-ap-southeast-1.amazonaws.com/khalti-customers/media/2020/7/2/c4998bd4d58d4c41841081b6bef52dc6.jpg" title="Janakpur Furniture" />
                            <Payments image="https://s3-ap-southeast-1.amazonaws.com/khalti-customers/media/2020/7/31/0ea4634eb52f4d17b2dbf9b92dc33aaa.jpeg" title="PCR Test" />
                            <Payments image="https://scontent.fktm8-1.fna.fbcdn.net/v/t1.0-9/12524116_1709457542659432_8160792657861703316_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=0sUFx02gv_IAX9stWJY&_nc_ht=scontent.fktm8-1.fna&oh=7937e89747b10e0e76f07472a5d88b8a&oe=5F856BF7" title="VSIC" />
                        </div>
                    </div>

                    <div className="content__main-servicestwo">
                        <h6>HealthCare & Medicines <a href="#">Show All</a></h6>
                        <div className="content__main-servicesrow">
                            <Payments image="https://s3-ap-southeast-1.amazonaws.com/khalti-customers/media/2020/7/31/0ea4634eb52f4d17b2dbf9b92dc33aaa.jpeg" title="PCR Test" />
                            <Payments image="https://s3-ap-southeast-1.amazonaws.com/khalti-customers/media/2020/3/29/6f304c81e8bd450c887a52d9fa9916c9.png" title="Nepmeds" />
                            <Payments image="https://s3-ap-southeast-1.amazonaws.com/khalti-customers/media/2020/2/25/19ca18ddd1534489817a5360c8f19337.jpg" title="Nepills" />
                            <Payments image="https://s3-ap-southeast-1.amazonaws.com/khalti-customers/media/2020/7/21/921b594a6e9c491d862655f2ed706df0.png" title="Rhythm Neuropsychiatry" />
                            <Payments image="https://s3-ap-southeast-1.amazonaws.com/khalti-customers/media/2019/12/31/eeb1e66e5d674b6998c0cf1f8bd5f888.png" title="Doctors on Call Nepal" />
                        </div>
                        <Slider src={require('./slider/slider-bottom.JPG')} />
                    </div>

                    <div className="content__main-servicestwo">
                        <h6>We're Accepted At <a href="#">Show All</a></h6>
                        <div className="content__main-servicesrow">
                            <Payments image="https://s3-ap-southeast-1.amazonaws.com/khalti-customers/media/2020/1/17/053cf90968e240a3a83949841a93ba86.png" title="Variyo Shop" />
                            <Payments image="https://s3-ap-southeast-1.amazonaws.com/khalti-customers/media/2020/1/21/54c09cf9e6be445b94d4be48ba8a3700.png" title="Foodmandu" />
                            <Payments image="https://s3-ap-southeast-1.amazonaws.com/khalti-customers/media/2020/1/21/8d66aeba78954c54864929b22e95bc9f.png" title="NetTV" />
                            <Payments image="https://s3-ap-southeast-1.amazonaws.com/khalti-customers/media/2020/6/2/ff9dcffdd5124998b86fecb370e2a4c4.png" title="Thuprai Solutions" />
                            <Payments image="https://s3-ap-southeast-1.amazonaws.com/khalti-customers/media/2020/1/21/109b00bda33d4647a7c1955eed5f0081.png" title="Thulo Pasal" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Content;
