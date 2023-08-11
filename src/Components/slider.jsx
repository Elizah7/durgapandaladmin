import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import { Box, Image } from "@chakra-ui/react";

const ImageSlider = (props) => {
    const {data} = props
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
     
        arrows :false
      };
      return (
        <Box width="100%">
        <Slider {...settings} autoplay autoplaySpeed={5000}>
           {
            data.map(ele=><Box className="slider_images" width="100%"  height={["300px", "300px", "440px", "450px"]}>
                <Image width="100%" height={["300px", "300px", "440px", "450px"]}src={ele.image}/>
            </Box>)
           }
        </Slider>
        </Box>
      );
}

export default ImageSlider
