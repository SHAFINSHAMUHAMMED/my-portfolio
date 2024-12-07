import {
    Button,
    Container,
    Heading,
    Stack,
    Text,
    useBreakpointValue,
    Input,
    FormControl,
    FormLabel,
    Textarea,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    useDisclosure,
    useToast,
  } from '@chakra-ui/react';
  import * as React from 'react';
  import { useState } from 'react';
  
  export default function CTA() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();
  
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      location: '',
      message: '',
    });
  
    const [errors, setErrors] = useState({});
  
    const validateFields = () => {
      const newErrors = {};
      if (!formData.name.trim()) newErrors.name = 'Name is required.';
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required.';
      } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        newErrors.email = 'Invalid email format.';
      }
      if (!formData.message.trim()) newErrors.message = 'Message is required.';
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
      setErrors({ ...errors, [name]: '' }); // Clear field error on change
    };
  
    const handleSubmit = async () => {
      if (!validateFields()) return;
  
      const webhookURL = 'https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZmMDYzNDA0MzQ1MjY1NTUzMzUxMzAi_pc'; 
  
      try {
        const response = await fetch(webhookURL, {
          method: 'POST',
          headers: {
            "Content-Type": "multipart/form-data",
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          toast({
            title: 'Message Sent!',
            description: 'Your message has been successfully sent.',
            status: 'success',
            duration: 5000,
            isClosable: true,
          });
          setFormData({ name: '', email: '', phone: '', location: '', message: '' });
          setErrors({});
          onClose();
        } else {
          throw new Error('Failed to send message');
        }
      } catch (error) {
        toast({
          title: 'Error',
          description: 'There was an error sending your message. Please try again.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    };
  
    return (
      <Container
        id="freelance"
        as="section"
        maxW="7xl"
        py={{ base: '10', md: '12' }}
        my={{ base: '10', md: '12' }}
        bg="white"
        borderRadius="20"
        alignItems="center"
      >
        <Stack spacing={{ base: '8', md: '10' }}>
          <Stack spacing={{ base: '4', md: '5' }} align="center">
            <Heading
              size={useBreakpointValue({ base: 'lg', md: 'xl', lg: '2xl' })}
              fontWeight="800"
              color={'primary.800'}
            >
              Looking For a Freelancer?
            </Heading>
            <Text color="gray.700" maxW="2xl" textAlign="center" fontSize="md">
              I have experience working on simple and complex projects. I’ve created apps, websites, scripts,
              and have deployed admin panels and databases/backends on the cloud. I enjoy taking on new challenges
              and working on experimental projects.
              <br />
              Let’s discuss your requirements!
            </Text>
          </Stack>
          <Stack spacing="3" direction={{ base: 'column', sm: 'row' }} justify="center">
            <Button
              variant="solid"
              size="lg"
              bg="primary.800"
              color="white"
              onClick={onOpen}
              transition="all ease-in 200ms"
              _hover={{
                bg: 'primary.900',
                textDecoration: 'none',
                px: '10',
                transition: 'all ease-in 200ms',
              }}
            >
              Send a Message
            </Button>
          </Stack>
        </Stack>
  
        {/* Modal Form */}
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Connect with Me</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack spacing={4}>
                <FormControl isRequired>
                  <FormLabel color={'gray.500'}>Name</FormLabel>
                  <Input
                    placeholder="Enter your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    isInvalid={errors.name}
                    color={'gray.500'}
                  />
                  <Text color="red.500" fontSize="sm">
                    {errors.name}
                  </Text>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel color={'gray.500'}>Email</FormLabel>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    isInvalid={errors.email}
                    color={'gray.500'}
                  />
                  <Text color="red.500" fontSize="sm">
                    {errors.email}
                  </Text>
                </FormControl>
                <FormControl>
                  <FormLabel color={'gray.500'}>Phone</FormLabel>
                  <Input
                    type="tel"
                    placeholder="Enter your phone number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    color={'gray.500'}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel color={'gray.500'}>Location</FormLabel>
                  <Input
                    placeholder="Enter your location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    color={'gray.500'}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel color={'gray.500'}>Message</FormLabel>
                  <Textarea
                    placeholder="Write your message here"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    isInvalid={errors.message}
                    color={'gray.500'}
                  />
                  <Text color="red.500" fontSize="sm">
                    {errors.message}
                  </Text>
                </FormControl>
              </Stack>
            </ModalBody>
            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={handleSubmit}
                isDisabled={!formData.name || !formData.email || !formData.message}
              >
                Submit
              </Button>
              <Button variant="ghost" onClick={onClose}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Container>
    );
  }
  