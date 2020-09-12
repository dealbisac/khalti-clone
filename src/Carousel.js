import React from "react";
import './Carousel.css';
import { Carousel } from "react-responsive-carousel";

export default () => (
    <div className="carousel">
        <Carousel>
            <div>
                <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
                <button> Hello </button>
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>

    </div >

);
