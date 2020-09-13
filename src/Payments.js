import React from 'react';
import './Payments.css';

function Payments({ image, title }) {
    return (
        <div className="payments">
            <center>
                <img
                    src={image}
                    alt="payments"
                />
                <h6>{title}</h6>
            </center>
        </div>
    )
}

export default Payments
