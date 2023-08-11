import { Box, Image, Stack, Flex, Text, Heading } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Navbar from '../Components/navbar'
import Welcomenote from '../Components/welcomenote';
import ImageSlider from '../Components/slider';
import Sidebar from '../Components/Sidebar';


const HomePage = () => {
  const [image, setImage] = useState("")
  // const [lightning, setLighning] = useState(true)


  const url = "http://localhost:8000/images/add"
  const handleSubmit = (e) => {
    e.preventDefault()

    let formData = new FormData();
    formData.append('image', image);
    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    }

    axios.post(url, formData, config)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error.message);
      });
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const data = [

    { image: "https://wallpapercave.com/wp/wp10023692.jpg", caption: "Mata Shailputri" },
    { image: "https://e1.pxfuel.com/desktop-wallpaper/766/966/desktop-wallpaper-goddess-brahmacharini-maa-shailputri.jpg", caption: "Mata Bramhacharini" },
    { image: "https://wallpapercave.com/dwp1x/wp10074590.png", caption: "Mata Chandraghanta" },
    { image: "https://i0.wp.com/wordzz.com/wp-content/uploads/durga-maa/navdurga/kushmanda/done/Maa-Kushmanda.jpg?resize=1068%2C785&ssl=1", caption: "Mata Kushmandha" },
    { image: "https://www.bhagwankiphoto.com/wp-content/uploads/2021/09/Spiritual-Goddess-Skandamata-Images.jpg", caption: "Mata Skandmata" },
    { image: "https://www.jagranimages.com/images/newimg/22102020/22_10_2020-maa-katyayani-katha_20927001.jpg", caption: "Mata Katyani" },
    { image: "https://images.pexels.com/photos/12994378/pexels-photo-12994378.jpeg?cs=srgb&dl=pexels-kolkatar-chobiwala-12994378.jpg&fm=jpg", caption: "Mata Kalratri" },
    { image: "https://static.india.com/wp-content/uploads/2023/03/Maa-Mahagauri-1.jpg?impolicy=Medium_Resize&w=1200&h=800", caption: "Mata Mahagauri" },
    { image: "https://images.herzindagi.info/image/2021/Oct/siddhidatri-devi-ki-aarti.jpg", caption: "Mata Sidhidatri" },
    { image: "https://wallpapercave.com/wp/wp10023692.jpg", caption: "Mata Shailputri" },
    { image: "https://e1.pxfuel.com/desktop-wallpaper/766/966/desktop-wallpaper-goddess-brahmacharini-maa-shailputri.jpg", caption: "Mata Bramhacharini" },
    { image: "https://wallpapercave.com/dwp1x/wp10074590.png", caption: "Mata Chandraghanta" },
    { image: "https://i0.wp.com/wordzz.com/wp-content/uploads/durga-maa/navdurga/kushmanda/done/Maa-Kushmanda.jpg?resize=1068%2C785&ssl=1", caption: "Mata Kushmandha" },
    { image: "https://www.bhagwankiphoto.com/wp-content/uploads/2021/09/Spiritual-Goddess-Skandamata-Images.jpg", caption: "Mata Skandmata" },
    { image: "https://www.jagranimages.com/images/newimg/22102020/22_10_2020-maa-katyayani-katha_20927001.jpg", caption: "Mata Katyani" },
    { image: "https://images.pexels.com/photos/12994378/pexels-photo-12994378.jpeg?cs=srgb&dl=pexels-kolkatar-chobiwala-12994378.jpg&fm=jpg", caption: "Mata Kalratri" },
    { image: "https://static.india.com/wp-content/uploads/2023/03/Maa-Mahagauri-1.jpg?impolicy=Medium_Resize&w=1200&h=800", caption: "Mata Mahagauri" },
    { image: "https://images.herzindagi.info/image/2021/Oct/siddhidatri-devi-ki-aarti.jpg", caption: "Mata Sidhidatri" },
    { image: "https://wallpapercave.com/wp/wp10023692.jpg", caption: "Mata Shailputri" },
    { image: "https://e1.pxfuel.com/desktop-wallpaper/766/966/desktop-wallpaper-goddess-brahmacharini-maa-shailputri.jpg", caption: "Mata Bramhacharini" },
    { image: "https://wallpapercave.com/dwp1x/wp10074590.png", caption: "Mata Chandraghanta" },
    { image: "https://i0.wp.com/wordzz.com/wp-content/uploads/durga-maa/navdurga/kushmanda/done/Maa-Kushmanda.jpg?resize=1068%2C785&ssl=1", caption: "Mata Kushmandha" },
    { image: "https://www.bhagwankiphoto.com/wp-content/uploads/2021/09/Spiritual-Goddess-Skandamata-Images.jpg", caption: "Mata Skandmata" },
    { image: "https://www.jagranimages.com/images/newimg/22102020/22_10_2020-maa-katyayani-katha_20927001.jpg", caption: "Mata Katyani" },
    { image: "https://images.pexels.com/photos/12994378/pexels-photo-12994378.jpeg?cs=srgb&dl=pexels-kolkatar-chobiwala-12994378.jpg&fm=jpg", caption: "Mata Kalratri" },
    { image: "https://static.india.com/wp-content/uploads/2023/03/Maa-Mahagauri-1.jpg?impolicy=Medium_Resize&w=1200&h=800", caption: "Mata Mahagauri" },
    { image: "https://images.herzindagi.info/image/2021/Oct/siddhidatri-devi-ki-aarti.jpg", caption: "Mata Sidhidatri" },
    { image: "https://wallpapercave.com/wp/wp10023692.jpg", caption: "Mata Shailputri" },
    { image: "https://e1.pxfuel.com/desktop-wallpaper/766/966/desktop-wallpaper-goddess-brahmacharini-maa-shailputri.jpg", caption: "Mata Bramhacharini" },
    { image: "https://wallpapercave.com/dwp1x/wp10074590.png", caption: "Mata Chandraghanta" },
  ]
  let newdata = new Array(200).fill(-1)
  let rand = 'rgb(' + (Math.floor((256 - 199) * Math.random()) + 200) + ',' + (Math.floor((256 - 199) * Math.random()) + 200) + ',' + (Math.floor((256 - 199) * Math.random()) + 200) + ')'
  return (<Stack>
    <Welcomenote />
    <Box width="100%" display="flex" justifyContent="center" columnGap="1%" alignItems="top">
      <Box width="20%" display={["none", "none", "none", "block"]} className='border-box'>
        <Sidebar />
      </Box>
      <Box width={["100%", "100%", "100%", "80%"]} paddingTop="1%">
        <nav width="100%">
          <Navbar />
        </nav>

        <Box width="100%" display="flex" justifyContent="center" paddingTop="5%">
          <Box className='boxshadow imageslider' width={["95%", "95%", "70%", "70%"]} height={["300px", "300px", "440px", "450px"]}>
            <ImageSlider data={data} />
          </Box>
        </Box>
        <section>
          <Box width="100%" className='welcome_note' display="flex" margin="auto" marginTop="5%" position="relative">
            <Box width="100%" gap="4%" height="300px" display="flex" justifyContent="space-around" flexWrap="wrap" position="absolute">
              {newdata.map((item) => {
                let rand = 'rgb(' + (Math.floor((250 - 19) * Math.random()) + 20) + ',' + (Math.floor((250 - 19) * Math.random()) + 20) + ',' + (Math.floor((250 - 19) * Math.random()) + 10) + ')';
                return <Box className='lightningbuld' backgroundColor={rand} width="4px" height="4px" borderRadius="50%" />;
              })}
            </Box>

            <Box overflow="hidden" display="flex" justifyContent="space-between" alignItems="center" className="people" gap="5%" position="relative">
              {data.map((ele, index) => (
                <Box key={index} width={["50px", "50px", "70px", "70px"]} flexShrink={0} display="flex" justifyContent="center">
                  <Image width="100%" height="70%" src={ele.image} />
                </Box>
              ))}
            </Box>
            
            <Box paddingLeft="8%" overflow="hidden" display="flex" justifyContent="space-between" alignItems="center" className="people" gap="5%" position="relative">
              {data.map((ele, index) => (
                <Box key={index} width={["50px", "50px", "70px", "70px"]} flexShrink={0} display="flex" justifyContent="center">
                  <Image width="100%" height="70%" src={ele.image} />
                </Box>
              ))}
            </Box>
          </Box>
        </section>
        <section width="100%">
          <Box width="100%" height={["200px", "200px", "500px", "500px"]}>

          </Box>

        </section>
      </Box>
    </Box>
  </Stack>)
}

export default HomePage
