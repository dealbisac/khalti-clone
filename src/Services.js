import React from 'react';
import './Services.css';

function Services({ Icon, title, discount }) {
    return (
        <div className="services">
            <center>
                {Icon && <Icon />}
                <h6>{title}</h6>
                {discount ? <p>Cashback {discount}</p> : ""}
            </center>
        </div >
    );
}

export default Services;
