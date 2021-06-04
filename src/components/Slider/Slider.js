import React, { Component } from 'react'
import  Slider from "react-slick"
 class Sliders extends Component {
    render() {
        const settings={
            dots:true,
            infinite: true,
            // autoplay:true,
            // autoplaySpeed:3000,
            slidesToShow: 1,
            slidesToScroll: 1
        }
        return (
            <div>
            <Slider {...settings}>
                <div className="image"> 
                <div className="image__customers">
                    <h2>Customser 2500+</h2>
                    <span>This is the first page in of SCC Company</span>
                </div>
                <img src="/image/hinh12.jpg"/> 
                </div>
                <div className="image"> <img src="/image/hinh12.jpg"/> </div>
                <div className="image"> <img src="/image/hinh12.jpg"/> </div>
            </Slider>
            </div>
        )
    }
}
export default Sliders
