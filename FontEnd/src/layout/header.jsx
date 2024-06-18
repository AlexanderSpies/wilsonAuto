import React from 'react';
import {
  Box,
  Image,
  HStack,
  UnorderedList,
  ListItem,
  VStack,
  Link,
} from '@chakra-ui/react';
import Logo from './img/wilsonLogo.png'

const Header = () => {
  return (
    <Box w='100%' height='auto' bgColor='#FFFFFF' >
    <HStack display='flex' justifyContent='center' spacing={30}>
      <Image src={Logo} height='20rem'/>
        <UnorderedList color='#06569eff'fontSize='1.2rem' fontFamily='heading' textStyle='libreBold'>
            <VStack spacing={8}>
            <ListItem><Link>About</Link></ListItem>
            <ListItem><Link>Services</Link></ListItem>
            <ListItem><Link>Contact</Link></ListItem>
            </VStack>
        </UnorderedList>
      </HStack>
    </Box>
  );
};

export default Header;
