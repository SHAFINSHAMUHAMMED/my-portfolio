import React from 'react';
import {
    Box,
    chakra,
    Container,
    Text,
    HStack,
    VStack,
    Flex,
    useColorModeValue,
    useBreakpointValue,
    Tag
} from '@chakra-ui/react';

const milestones = [
    {
        id: 1,
        date: '2023-2024',
        title: 'Landing Pages for learnersuae.com',
        description: `Developed multiple landing pages for learnersuae.com using React.js to enhance user engagement and optimize user experience.`,
        technologies: ['React.js']
    },
    {
        id: 2,
        date: '2024',
        title: 'Competition Dashboard for Sales Team',
        description: `Developed a competition dashboard for sales teams at Learners University College, Dubai. The platform manages competitions efficiently using React.js, Express.js, and MongoDB.`,
        technologies: ['React.js', 'ExpressJs', 'MongoDB']
    },
    {
        id: 3,
        date: '2024',
        title: 'Convocation Registration Portal',
        description: `Created a convocation registration portal allowing students to update preferences, manage guest details, and make payments. Admin features include WhatsApp message scheduling, seat allocation, and event-time student management. Tech stack: React.js, Express.js, MongoDB, Doubble Tick API (WhatsApp automation), and PayTabs for payments.`,
        technologies: ['React.js', 'ExpressJs', 'MongoDB', 'Doubble Tick API', 'PayTabs']
    },
    {
        id: 4,
        date: '2024',
        title: 'CRM Dashboard for Learners University College',
        description: `Built a CRM dashboard to manage leads with role-based login functionality for managers, team leaders, and admins. Integrated GoHighLevel API for lead management using React.js, Express.js, and MongoDB.`,
        technologies: ['React.js', 'ExpressJs', 'MongoDB', 'GoHighLevel API']
    },
    {
        id: 5,
        date: '2024',
        title: 'Payment Plan Generator',
        description: `Enhanced and added new pages to the payment plan generator used for generating students' course fee structures at Learners University College. Users can download the generated plan as a PDF. Developed using WordPress, PHP, JavaScript, HTML, and PDFCrowd API.`,
        technologies: ['WordPress', 'PHP', 'JavaScript', 'HTML', 'PDFCrowd API']
    },
    {
        id: 6,
        date: '2024',
        title: 'Email Signature Generator',
        description: `Designed an email signature generator for Learners University College, Skillhub Institute, UPCarrera, and Teachers India. Users can upload profile details to create and copy email signatures. Built using React.js and Cloudinary for cloud storage.`,
        technologies: ['React.js', 'Cloudinary']
    }
];


const Projects = () => {
    const isMobile = useBreakpointValue({ base: true, md: false });
    const isDesktop = useBreakpointValue({ base: false, md: true });

    return (
        <Container  id='projects' maxWidth="7xl" maxHeight={'3xl'} overflowX={'auto'} p={{ base: 2, sm: 10 }}
            my={2}
            css={{
                '&::-webkit-scrollbar': {
                    marginTop: '8px',
                    width: '8px',
                    height: '8px',
                },
                '&::-webkit-scrollbar-track': {
                    marginTop: '8px',
                    width: '2px',
                    height: '4px',
                },
                '&::-webkit-scrollbar-thumb': {
                    marginTop: '8px',
                    background: '#121212',
                    borderRadius: '12px',
                },
            }}
        >

            {milestones.map((milestone) => (
                <Flex key={milestone.id} mb="10px">
                    {/* Desktop view(left card) */}
                    {isDesktop && milestone.id % 2 === 0 && (
                        <>
                            <EmptyCard />
                            <LineWithDot />
                            <Card {...milestone} />
                        </>
                    )}

                    {/* Mobile view */}
                    {isMobile && (
                        <>
                            <LineWithDot />
                            <Card {...milestone} />
                        </>
                    )}

                    {/* Desktop view(right card) */}
                    {isDesktop && milestone.id % 2 !== 0 && (
                        <>
                            <Card {...milestone} />

                            <LineWithDot />
                            <EmptyCard />
                        </>
                    )}
                </Flex>
            ))}
        </Container>
    );
};



const Card = ({ id, title, description, date, technologies }) => {
    const isEvenId = id % 2 === 0;
    let borderWidthValue = isEvenId ? '15px 15px 15px 0' : '15px 0 15px 15px';
    let leftValue = isEvenId ? '-15px' : 'unset';
    let rightValue = isEvenId ? 'unset' : '-15px';

    const isMobile = useBreakpointValue({ base: true, md: false });
    if (isMobile) {
        leftValue = '-15px';
        rightValue = 'unset';
        borderWidthValue = '15px 15px 15px 0';
    }

    return (
        <HStack
            flex={1}
            p={{ base: 3, sm: 6 }}
            bg={useColorModeValue('gray.300', 'gray.800')}
            spacing={5}
            rounded="lg"
            alignItems="center"
            pos="relative"
            _before={{
                content: `""`,
                w: '0',
                h: '0',
                borderColor: `transparent ${useColorModeValue('#edf2f6', '#1a202c')} transparent`,
                borderStyle: 'solid',
                borderWidth: borderWidthValue,
                position: 'absolute',
                left: leftValue,
                right: rightValue,
                display: 'block'
            }}
        >
            <Box>
                <Text fontSize="md" color={isEvenId ? 'primary.800' : 'blue.700'}>
                    {date}
                </Text>

                <VStack spacing={2} mb={3} textAlign="left">
                    <chakra.h1 fontSize="xl" lineHeight={1.2} fontWeight="bold" w="100%">
                        {title}
                    </chakra.h1>
                    <Text fontSize="sm">{description}</Text>
                </VStack>

                <HStack wrap="wrap" spacing={2}>
                    {technologies.map((tech, index) => (
                        <Tag key={index} variant={'subtle'}>
                            {tech}
                        </Tag>
                    ))}
                </HStack>
            </Box>
        </HStack>
    );
};


const LineWithDot = () => {
    return (
        <Flex
            pos="relative"
            alignItems="center"
            mr={{ base: '40px', md: '40px' }}
            ml={{ base: '0', md: '40px' }}
        >
            <chakra.span
                position="absolute"
                left="50%"
                height="calc(100% + 10px)"
                border="1px solid"
                borderColor={useColorModeValue('gray.400', 'gray.700')}
                top="0px"
            ></chakra.span>
            <Box pos="relative" p="10px">
                <Box
                    pos="absolute"
                    top="0"
                    left="0"
                    bottom="0"
                    right="0"
                    width="100%"
                    height="100%"
                    backgroundSize="cover"
                    backgroundRepeat="no-repeat"
                    backgroundPosition="center center"
                    bg={useColorModeValue('purple.800', 'purple.200')}
                    borderRadius="100px"
                    backgroundImage="none"
                    opacity={1}
                ></Box>
            </Box>
        </Flex>
    );
};

const EmptyCard = () => {
    return <Box flex={{ base: 0, md: 1 }} p={{ base: 0, md: 6 }} bg="transparent"></Box>;
};

export default Projects;