import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import yearsList from '../years.json';
import carList from '../car-list.json';
const EmailForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:8080/send-email',
        formData
      );
      if (response.data.success) {
        setStatus('Email sent successfully!');
      } else {
        setStatus('Failed to send email.');
      }
    } catch (error) {
      setStatus('An error occurred: ' + error.message);
    }
  };

  return (
    <Box width="75%" display='flex' justifyContent='center'>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel color="white">Name:</FormLabel>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel color="white" fontFamily="body">
              Email:
            </FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel color="white" fontFamily="body">
              Year:
            </FormLabel>
            <Select width='300px'
              type="dropdown"
              name="year"
              value={formData.year}
              onChange={handleChange}
            >
              {yearsList.map(year => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel color="white" fontFamily="body">
             Make & Model:
            </FormLabel>
            <Select width='300px'
              name="model"
              value={formData.model}
              onChange={handleChange}
            >
              {carList.map(car => (
                <optgroup key={car.brand} label={car.brand}>
                  {car.models.map(model => (
                    <option  height='150px' key={model} value={model}>
                      {model}
                    </option>
                  ))}
                </optgroup>
              ))}
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel color="white">Message:</FormLabel>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Send
          </Button>
        </VStack>
      </form>
      {status && <Box mt={4}>{status}</Box>}
    </Box>
  );
};

export default EmailForm;
