import React from 'react';
import './Slider.css';


function Slider({ src }) {
    return (
        <div className="slider">
            <img src={src}
                alt="slider"
            />
        </div>
    )
}

export default Slider
