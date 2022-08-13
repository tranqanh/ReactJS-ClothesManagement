import React from 'react';
import "./css/bannerStyle.css"

function Banner() {
    return (

            <section id='sm-banner' className='section-p1'>
                <div className='banner-box'>
                    <h4>Crazy deals</h4>
                    <h2>Buy 1 Get 1</h2>
                    <span>The best classis dress is on sale at cara</span>
                    <button className='bbtn'>Learn More</button>
                </div>
                <div className='banner-box box2'>
                    <h4>Spring/Summer</h4>
                    <h2>Upcoming season</h2>
                    <span>The best classis dress is on sale at cara</span>
                    <button className='bbtn'>Learn More</button>
                </div>
            </section>

    )
}

export default Banner;