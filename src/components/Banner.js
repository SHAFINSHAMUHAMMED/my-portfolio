import { Box, ButtonGroup, Container, Flex, Heading, HStack, IconButton, Image, Tag, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter,faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import Education from './Education'
 import profile from '../images/myProfile.png'

export default function Banner() {
    return (
        <Container maxW={'7xl'} alignItems='center' my={5}>
            <Flex width={'100%'} maxW={['full', 'full', '7xl']} justifyContent='center' alignItems={'center'} flexDir={['column', 'column', 'row', 'row']}>
                <Flex width={['sm', 'md', '2xl']} flexDir={'column'} justifyContent='space-between' bgColor={'white'} color='black' maxHeight='2xl' minHeight={'4xl'} borderRadius='3xl' p='10' mb={10}>
                    <Box>
                        <Flex alignItems={'center'} justifyContent='center'>
                            <Image borderColor={'gray.100'} src={profile} width='32' />
                        </Flex>

                        <Heading textAlign={'center'}>Shafin K</Heading>

                        <Text fontSize={'sm'} textAlign='center'>
                            I am currently working as a <strong>MERN Stack Developer</strong> at <br/>WebQMedia, Majeri, Malappuram, Kerala. I am passionate about Web Development and creating innovative digital solutions.
                        </Text>

                        <VStack my={4}>
                            <Tag px={5} variant={'subtle'} colorScheme='primary'>MERN Stack Developer</Tag>
                            <Tag px={5} variant={'subtle'} colorScheme='primary'>Full Stack Developer</Tag>
                        </VStack>
                        <Box orientation='horizontal' bgColor='gray.300' my={4} height={0.2} />
                        {/* Icons  */}
                        <VStack spacing={6} alignItems='start'>
                            <HStack>
                                <Box me={2}>
                                    <IconButton 
                                        as='a' 
                                        href='mailto:shafinpoongode@gmail.com' 
                                        shadow={'md'} 
                                        variant={'ghost'} 
                                        border='1px solid' 
                                        borderColor={'gray.300'}
                                    >
                                        <FaEnvelope />
                                    </IconButton>
                                </Box>
                                <VStack alignItems={'start'} spacing={0.1}>
                                    <Text fontSize={'sm'}>Email</Text>
                                    <Text fontWeight={'600'}>shafinpoongode@gmail.com</Text>
                                </VStack>
                            </HStack>

                            <HStack>
                                <Box me={2}>
                                    <IconButton 
                                        as='a' 
                                        href='https://github.com/SHAFINSHAMUHAMMED' 
                                        target='_blank' 
                                        shadow={'md'} 
                                        variant={'ghost'} 
                                        border='1px solid' 
                                        borderColor={'gray.300'}
                                    >
                                        <FaGithub />
                                    </IconButton>
                                </Box>
                                <VStack alignItems={'start'} spacing={0.1}>
                                    <Text fontSize={'sm'}>Github</Text>
                                    <Text fontWeight={'600'}>SHAFINSHAMUHAMMED</Text>
                                </VStack>
                            </HStack>

                            <HStack>
                                <Box me={2}>
                                    <IconButton 
                                        as='a' 
                                        href='https://www.linkedin.com/in/shafin-k' 
                                        target='_blank' 
                                        shadow={'md'} 
                                        variant={'ghost'} 
                                        border='1px solid' 
                                        borderColor={'gray.300'}
                                    >
                                        <FaLinkedin />
                                    </IconButton>
                                </Box>
                                <VStack alignItems={'start'} spacing={0.1}>
                                    <Text fontSize={'sm'}>Linkedin</Text>
                                    <Text fontWeight={'600'}>shafin k</Text>
                                </VStack>
                            </HStack>

                            <HStack>
                                <Box me={2}>
                                    <IconButton 
                                        as='a' 
                                        href='https://stackoverflow.com/users/23272353/shafin-k' 
                                        target='_blank' 
                                        shadow={'md'} 
                                        variant={'ghost'} 
                                        border='1px solid' 
                                        borderColor={'gray.300'}
                                    >
                                        <FontAwesomeIcon icon={faStackOverflow} />
                                    </IconButton>
                                </Box>
                                <VStack alignItems={'start'} spacing={0.1}>
                                    <Text fontSize={'sm'}>Stack Overflow</Text>
                                    <Text fontWeight={'600'}>
                                    SHAFIN K</Text>
                                </VStack>
                            </HStack>
                        </VStack>
                    </Box>

                    <ButtonGroup justifyContent={'center'} alignItems={'center'} variant='ghost' spacing={1.9}>
                        <IconButton 
                            as='a' 
                            href='https://www.facebook.com/shafinpoongode' 
                            target='_blank' 
                            _hover={{ color: 'primary.700', bgColor: 'primary.50', border: '1px solid', borderColor: 'primary.700' }}
                        >
                            <FaFacebook size={24} />
                        </IconButton>
                        <IconButton 
                            as='a' 
                            href='https://www.instagram.com/shafinsha_muhammed/' 
                            target='_blank' 
                            _hover={{ color: 'primary.700', bgColor: 'primary.50', border: '1px solid', borderColor: 'primary.700' }}
                        >
                            <FaInstagram size={24} />
                        </IconButton>
                        <IconButton 
                            as='a' 
                            href='https://twitter.com/shafinpoongode' 
                            target='_blank' 
                            _hover={{ color: 'primary.700', bgColor: 'primary.50', border: '1px solid', borderColor: 'primary.700' }}
                        >
                            <FontAwesomeIcon icon={faXTwitter} size="lg" />
                        </IconButton>
                    </ButtonGroup>
                </Flex>
                <Box ms={['0', '0', '8']} flexDir={'column'} justifyContent='space-between' bgColor={'white'} color='black' maxHeight='4xl' scrollBehavior={'smooth'} minHeight={'4xl'} borderRadius='3xl' p='10' mb={10}>
                    <Heading>
                        Education
                    </Heading>
                    <Education />
                </Box>
            </Flex>
        </Container>
    )
}