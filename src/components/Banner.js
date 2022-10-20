import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Banner() {
  return (
    <div className="relative">
        <Carousel
            autoplay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={3000} 
            >
                <div>
                    <img loading="lazy" src="" alt="" />
                </div>

                <div>
                     <img loading="lazy" src="" alt="" />
                </div>

                <div>
                      <img loading="lazy" src="" alt="" />
                </div>
            </Carousel>


    </div>
  )
}

export default Banner
