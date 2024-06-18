import React from 'react';
import Slider from 'react-slick';
import { Box, Text, ListItem, UnorderedList } from '@chakra-ui/react';

// Import slick-carousel styles (choose a theme that suits your project)
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    adaptiveHeight: true,
  };

  const textCards = [
    { title: 'Basic Exterior Wash and Wax Package:', description: 'Exterior hand wash and dry Application of wax or sealant for paint protection \n Cleaning of exterior windows and mirrors \n Tire and rim cleaning. \n Interior vacuuming \n Basic interior wipe-down'},
    { title: 'Standard Interior and Exterior Detailing Package:', description: 'Everything in the Basic package, plus...\n Full interior vacuuming and shampooing of carpets and upholstery \n Cleaning and conditioning of leather or vinyl surfaces \n Detailing of dashboard, center console, and door panels' },
    { title: 'Premium Paint Correction and Ceramic Coating Package:', description: 'Everything in the Standard package, plus...\n Paint decontamination (removal of embedded contaminants) \n Paint correction (removal of swirls, scratches, and imperfections) \n Application of ceramic coating for long-term paint protection and enhanced gloss \n Hydrophobic coating for windows and exterior surfaces' },
    { title: 'Complete Detailing and Restoration Package:', description: 'Comprehensive exterior and interior detailing \n Paint correction and scratch removal \n Full engine bay cleaning and dressing \n Deep cleaning of all interior surfaces including vents and crevices \n Leather conditioning and restoration (if applicable) \n Application of high-grade wax or sealant' },
  ];

  return (
    <Box maxW="550px" mx="auto">
      <Slider {...settings}>
        {textCards.map((card, index) => (
          <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" p="4">
            <Text fontWeight="bold" fontSize="xl">{card.title}</Text>
            <UnorderedList mt="2">
              {card.description.split('\n').map((item, i) => (
                <ListItem key={i}>{item}</ListItem>
              ))}
            </UnorderedList>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
