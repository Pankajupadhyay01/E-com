'use client';
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';
const Hero = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div>
            <Carousel responsive={responsive} showDots={true} infinite={true} autoPlay={true} autoPlaySpeed={4000}>
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
            </Carousel>
        </div>
    );
}

export default Hero;
