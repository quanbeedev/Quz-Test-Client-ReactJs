import React, { Component } from 'react'
import Sliders from '../Slider/Slider'

class About extends Component {
    render() {
        return (
            <div className="about-us">
              <Sliders/>
                <br/> <br/> <br/> <h4>History</h4> <br/><br/>
                <div className="content-about">
                    <span className="content-about-title">
                    Paris (French pronunciation: ​[paʁi] (About this soundlisten)) is the capital and most populous city of France, with an estimated population of 2,175,601 residents as of 2018, in an area of more than 105 square kilometres (41 square miles).[4] Since the 17th century, Paris has been one of Europe's major centres of finance, diplomacy, commerce, fashion, gastronomy, science and arts. The City of Paris is the centre and seat of government of the Île-de-France, or Paris Region, which has an estimated population of 12,174,880, or about 18 percent of the population of France as of 2017.[5] The Paris Region had a GDP of €709 billion ($808 billion) in 2017.[6] According to the Economist Intelligence Unit Worldwide Cost of Living Survey in 2018, Paris was the second most expensive city in the world, after Singapore and ahead of Zürich, Hong Kong, Oslo and Geneva.[7] Another source ranked Paris as most expensive, on a par with Singapore and Hong Kong, in 2018.[8][9]
                    </span>
                </div>
                <h1>This is Custom</h1>
                <div className="customer">
                        <div className="customercontent">
                        <img src="/image/hinh1.jfif" className="customer-image-1"/>
                        <img src="/image/hinh2.jfif" className="customer-image-2"/>
                        <img src="/image/hinh3.jfif" className="customer-image-3"/>
                        </div>
                </div>
                <div className="customer">
                        <img src="/image/hinh2.jfif" className="customer-image-1"/>
                        <img src="/image/hinh3.jfif" className="customer-image-2"/>
                        <img src="/image/hinh4.jfif" className="customer-image-3"/>
                </div>
            </div>
        )
    }
}
export default About
