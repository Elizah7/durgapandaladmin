import {
  Box, Image, Stack, Flex, Text, Heading, Table, Thead,
  Tbody,
  Tr,
  Th,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Navbar from '../Components/navbar'
import Welcomenote from '../Components/welcomenote';
import ImageSlider from '../Components/slider';
import Sidebar from '../Components/Sidebar';
import TableContent from '../Components/TableContent';

const UsersPage = () => {
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

  ]
  let newdata = new Array(200).fill(-1)
  let rand = 'rgb(' + (Math.floor((256 - 199) * Math.random()) + 200) + ',' + (Math.floor((256 - 199) * Math.random()) + 200) + ',' + (Math.floor((256 - 199) * Math.random()) + 200) + ')'
  return (<Stack>
    <Welcomenote />
    <Box width="100%" display="flex" justifyContent="center" columnGap="1%" alignItems="top">
      <Box width="20%" display={["none", "none", "none", "block"]} className='border-box'>
        <Sidebar />
      </Box>
      <Box width={["100%", "100%", "100%", "80%"]} paddingTop="1%" >
        <nav width="`100%">
          <Navbar />
        </nav>
        <main>
          <Box width="100%" className='welcome_note' display="flex" margin="auto" marginTop="5%" position="relative">
            <TableContainer width="100%">
              <Table variant='simple'>
                <TableCaption>Imperial to metric conversion factors</TableCaption>
                <Thead>
                  <Tr>
                    <Th>ID</Th>
                    <Th>NAME</Th>
                    <Th>PHONE NUMBER</Th>
                    <Th>EMAIL</Th>
                    <Th>ROLE</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {
                    data.map(ele => <TableContent {...ele} />)
                  }
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </main>

      </Box>
    </Box>
  </Stack>)
}

export default UsersPage
