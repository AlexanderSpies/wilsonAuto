import React from 'react';
import { Box, VStack, HStack, Image, Text } from '@chakra-ui/react';
import Form from '../components/form.jsx';
import Carousel from '../components/carousel.jsx';
import blueStang from './img/stangLogo.png';
import Boat from './img/boat.png';
import Wheels from './img/carWheels.png';

const App = () => {

  const images = [
    'https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg',
    'https://nikonrumors.com/wp-content/uploads/2014/03/Nikon-1-V3-sample-photo.jpg',
    'https://nikonrumors.com/wp-content/uploads/2014/03/Nikon-1-V3-sample-photo.jpg',
  ];

  return (
    <Box>
      <VStack spacing={0} align="center">
        {/* Section 1 */}
        <HStack spacing={12} alignItems="center" width="100%" bgColor='#326991cc'>
          <VStack spacing={4} align="center" width="60%">
            <Text
              fontFamily="heading"
              color="#FFFFFF"
              fontSize="35px"
              fontWeight="bold"
              width="75%"
              textAlign="left"
            >
              Welcome to Wilson Auto & Boat Detailing
            </Text>
            <Text
              fontFamily="body"
              textStyle='light'
              color="#FFFFFF"
              fontSize="15px"
              width="75%"
              textAlign="left"
            >
              Your trusted partner in vehicle and watercraft care since 1995. We provide premium detailing services tailored to meet your needs. Weekends were spent transforming our neglected vehicles in the heart of South Carolina's Piedmont region. From beat-up pickups to trusty fishing boats, our team meticulously brought them back to life, the compliments fueling a dream. We craved to share the satisfaction of a meticulous detail with others. Fueled by passion and a thirst for knowledge, we honed our skills and invested in the best to deliver exceptional auto and boat detailing. Wilson Auto and Boat Detailing isn't just a service, it's the culmination of our dedication to restoring the shine and pride to your prized possessions.
            </Text>
          </VStack>
          <Image src={blueStang} width="60%" alt="Blue Mustang" />
        </HStack>

        {/* Section 2 */}
        <HStack spacing={12} width="100%" bgColor='#57869Dcc'>
          <Image src={Boat} minHeight="200px" width="60%" alt="Boat" />
          <VStack spacing={4} align="center" width="70%">
            <Text
              fontFamily="heading"
              color="#FFFFFF"
              fontSize="35px"
              fontWeight="bold"
              width="75%"
              textAlign="left"
            >
              Contact Us
            </Text>
            <Form />
          </VStack>
        </HStack>

        {/* Section 3 */}
        <HStack spacing={12} width="100%" bgColor='#1D617Ccc'>
          <VStack spacing={4} align="center" width="70%">
            <Text
              fontFamily="heading"
              color="#FFFFFF"
              fontSize="35px"
              fontWeight="bold"
              width="75%"
              textAlign="left"
            >
              Book an Appointment 
            </Text>
            <Carousel/>
          </VStack>
          <Image src={Wheels} width="60%" alt="Car Wheels" />
        </HStack>
      </VStack>
    </Box>
  );
};

export default App;
