import React, { Component } from 'react';
import Masonry from 'react-masonry-component';

const masonryOptions = {
    transitionDuration: 0
};
 
export class Portfolio extends Component {
    render() {
        const images = this.props.images.map((image, idx) => {
            return (
                <div className="col-lg-3 col-md-4 col-sm-6 item" key={idx}>
                    <div className="portfolio-item">
                        <img src={image.image} alt="portfolio-image" />

                        <div className="portfolio-overlay">
                            <div className="portfolio-content">
                                <h3><a href="#">Digital Marketing</a></h3>
                                <span>Branding</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <section className="portfolio-area ptb-120 bg-08071c">
                <div className="container">
                    <div className="section-title">
                        <span>Our Works</span>
                        <h2>We Have Completed 2K Project Successfully</h2>
                    </div>
                </div>

                <Masonry
                    className={'grid row m-0'} // default ''
                    elementType={'div'} // default 'div'
                    options={masonryOptions} // default {}
                    disableImagesLoaded={false} // default false
                    updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                >
                    {images}
                </Masonry>
            </section>
        );
    }
}

Portfolio.defaultProps = {
    images: [
        { image: require("../../images/work-image/1.jpg") },
        { image: require("../../images/work-image/2.jpg") },
        { image: require("../../images/work-image/7.jpg") },
        { image: require("../../images/work-image/8.jpg") },
        { image: require("../../images/work-image/5.jpg") },
        { image: require("../../images/work-image/6.jpg") },
        { image: require("../../images/work-image/9.jpg") },
        { image: require("../../images/work-image/11.jpg") },
        { image: require("../../images/work-image/10.jpg") },
        { image: require("../../images/work-image/12.jpg") },
        { image: require("../../images/work-image/4.jpg") },
        { image: require("../../images/work-image/13.jpg") },
        { image: require("../../images/work-image/14.jpg") },
        { image: require("../../images/work-image/3.jpg") },
        { image: require("../../images/work-image/15.jpg") },
        { image: require("../../images/work-image/16.jpg") },
        { image: require("../../images/work-image/17.jpg") },
        { image: require("../../images/work-image/18.jpg") },
        { image: require("../../images/work-image/19.jpg") },
        { image: require("../../images/work-image/20.jpg") },
        { image: require("../../images/work-image/21.jpg") },
    ]
}

export default Portfolio;
