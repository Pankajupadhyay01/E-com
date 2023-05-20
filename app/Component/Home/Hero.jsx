'use client';
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';
import Image from "next/image";
import Category from "./Category";
const Hero = () => {
    const responsive = {
        superLargeDesktop: {
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

            <div className="my-[20px] h-[30vh] w-full object-cover">
                <Image className="w-full h-full" src="/banner2.jpg" width={1500} height={1000}/>
            </div>

            <Category/>

            <div className="my-[20px] h-[50vh] w-full object-cover">
                <Image className="w-full h-full" src="/banner1.jpg" width={1500} height={1000}/>
            </div>
        </div>
    );
}

export default Hero;
