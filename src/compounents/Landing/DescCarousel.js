import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {} from 'react-bootstrap';

const descCarousel = () => {
    return (
        <div  className="carouselContainer">
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100 caroselImg"
                    src="https://1fbvduh8cpa1rtpv82s67uj18t5-wpengine.netdna-ssl.com/wp-content/uploads/2019/07/shutterstock_445136566-1.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 caroselImg"
                    src="https://images.squarespace-cdn.com/content/v1/5c5da8482727be02dc843524/1550855957141-5IUA40R9BJSKUHRZI2S2/ke17ZwdGBToddI8pDm48kJnxEtVSFZmNYtz0QeYDOcx7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlmaRgP5nz9YY4MHpHvj5u4wMp-n-Chy-hJd2MpEGhw7mw/shutterstock_519204928.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 caroselImg"
                    src="https://d2myx53yhj7u4b.cloudfront.net/sites/default/files/ic-og-HumanResourceManagement-FacebookLinkedIn_0.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
        </Carousel>
        </div>
    );
}

export default descCarousel;