import React from 'react';
import {
  Image,
  HStack,
  Text,
} from '@chakra-ui/react';
import '../global.css';
import Logo from './imgs/wilsonLogo.png';

const Footer = () => {
  return (
    <Footer
      w="100%"
      height="auto"
      bgColor="#FFFFFF"
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
      alignItems="center"
      padding="4"
    >
      <HStack display="flex" justifyContent="center" spacing={30}>
        <Image src={Logo} height="150px" />
        <Text>Wilson Auto Detailing© </Text>
      </HStack>
    </Footer>
  );
};

export default Footer;