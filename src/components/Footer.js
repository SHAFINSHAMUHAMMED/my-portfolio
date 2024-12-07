import { ButtonGroup, Container, IconButton, Stack, Text } from '@chakra-ui/react';
import * as React from 'react';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => (
  <Container
    maxW={'100%'}
    as="footer"
    role="contentinfo"
    py={{ base: '8', md: '8' }}
    bg="white"
    color={'primary.800'}
  >
    <Stack justify="center" spacing={{ base: '4', md: '5' }}>
      <Stack justify="center" direction="row" align="center">
        <ButtonGroup justifyContent={'center'} alignItems={'center'} variant="ghost" spacing={1.9}>
          {/* Facebook Icon */}
          <IconButton
            as="a"
            href="https://www.facebook.com/shafinpoongode"
            target="_blank"
            aria-label="Facebook"
            _hover={{
              color: 'primary.700',
              bgColor: 'primary.50',
              border: '1px solid',
              borderColor: 'primary.700',
            }}
          >
            <FaFacebook size={24} />
          </IconButton>

          {/* Instagram Icon */}
          <IconButton
            as="a"
            href="https://www.instagram.com/shafinsha_muhammed/"
            target="_blank"
            aria-label="Instagram"
            _hover={{
              color: 'primary.700',
              bgColor: 'primary.50',
              border: '1px solid',
              borderColor: 'primary.700',
            }}
          >
            <FaInstagram size={24} />
          </IconButton>

          {/* X (Twitter) Icon */}
          <IconButton
            as="a"
            href="https://twitter.com/shafinpoongode"
            target="_blank"
            aria-label="Twitter"
            _hover={{
              color: 'primary.700',
              bgColor: 'primary.50',
              border: '1px solid',
              borderColor: 'primary.700',
            }}
          >
            <FontAwesomeIcon icon={faXTwitter} size="lg" />
          </IconButton>

          {/* GitHub Icon */}
          <IconButton
            as="a"
            href="https://github.com/SHAFINSHAMUHAMMED"
            target="_blank"
            aria-label="GitHub"
            s _hover={{
              color: 'primary.700',
              bgColor: 'primary.50',
              border: '1px solid',
              borderColor: 'primary.700',
            }}
          >
            <FaGithub size={24} />
          </IconButton>

          {/* LinkedIn Icon */}
          <IconButton
            as="a"
            href="https://www.linkedin.com/in/shafin-k"
            target="_blank"
            aria-label="LinkedIn"
            _hover={{
              color: 'primary.700',
              bgColor: 'primary.50',
              border: '1px solid',
              borderColor: 'primary.700',
            }}
          >
            <FaLinkedin size={24} />
          </IconButton>
        </ButtonGroup>
      </Stack>
      <Text textAlign={'center'} fontSize="20px" fontWeight={'bold'} color="gray.600">
        SHAFIN K
      </Text>
    </Stack>
  </Container>
);
