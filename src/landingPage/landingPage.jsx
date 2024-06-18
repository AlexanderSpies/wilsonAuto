import React from 'react';
import blueStang from './imgs/stangLogo.png';
import Boat from './imgs/boat.png'
import {
  Box,
  Image,
  HStack,
  VStack,
  Text,
} from '@chakra-ui/react';
import '../global.css';

const App = () => {
  return (
      <VStack height="25px">
        <Box
          width="100%"
          bgColor="#010f712e"
        >
          <HStack spacing={4}>
            <VStack spacing={4}>
              <Text
                width="85%"
                fontFamily="Libre Baskerville, serif"
                color="#FFFFFF"
                fontSize="35px"
                fontWeight="bolder"
              >
                Welcome to Wilson Auto & Boat Detailing
              </Text>
              <Text
                width="75%"
                fontFamily="Libre Baskerville, serif"
                color="#FFFFFF"
                fontSize="15px"
              >
                Your trusted partner in vehicle and watercraft care since 1995. We provide premium detailing services tailored to meet your needs. Weekends were spent transforming our neglected vehicles in the heart of South Carolina's Piedmont region. From beat-up pickups to trusty fishing boats, our team meticulously brought them back to life, the compliments fueling a dream. We craved to share the satisfaction of a meticulous detail with others. Fueled by passion and a thirst for knowledge, we honed our skills and invested in the best to deliver exceptional auto and boat detailing. Wilson Auto and Boat Detailing isn't just a service, it's the culmination of our dedication to restoring the shine and pride to your prized possessions.
              </Text>
            </VStack>
            <Image src={blueStang} width='70%' m='0'padding={0}/>
          </HStack>
          <HStack spacing={4}>
          <Image src={Boat} width='60%' m='0'padding={0}/>
            <VStack spacing={4}>
              <Text
                width="85%"
                fontFamily="Libre Baskerville, serif"
                color="#FFFFFF"
                fontSize="35px"
                fontWeight="bolder"
              >
                Welcome to Wilson Auto & Boat Detailing
              </Text>
              <Text
                width="75%"
                fontFamily="Libre Baskerville, serif"
                color="#FFFFFF"
                fontSize="15px"
              >
                Your trusted partner in vehicle and watercraft care since 1995. We provide premium detailing services tailored to meet your needs. Weekends were spent transforming our neglected vehicles in the heart of South Carolina's Piedmont region. From beat-up pickups to trusty fishing boats, our team meticulously brought them back to life, the compliments fueling a dream. We craved to share the satisfaction of a meticulous detail with others. Fueled by passion and a thirst for knowledge, we honed our skills and invested in the best to deliver exceptional auto and boat detailing. Wilson Auto and Boat Detailing isn't just a service, it's the culmination of our dedication to restoring the shine and pride to your prized possessions.
              </Text>
            </VStack>
          </HStack>
        </Box>
      </VStack>
  );
};

export default App;
