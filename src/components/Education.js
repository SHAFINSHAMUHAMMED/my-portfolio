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
    useBreakpointValue
} from '@chakra-ui/react';

const milestones = [
    {
        id: 1,
        date: 'MARCH, 2012',
        title: 'Completed 10th',
        description: `Completed regular stream under Kerala Board of Public Examinations`
    },
    {
        id: 2,
        date: 'MARCH, 2015',
        title: 'Completed 12th',
        description: `Completed Commerce stream under Kerala Department of Higher Secondary Education`
    },
    {
        id: 3,
        date: 'MARCH, 2018',
        title: 'Completed Graduation',
        description: 'Bachelor of Commerce from University of Calicut'
    },
    {
        id: 4,
        date: 'MARCH, 2020',
        title: 'Post Graduation Diploma',
        description: 'Completed Post Graduation Diploma in Computer Application under C-DIT Kerala'
    },
    {
        id: 5,
        date: 'OCTOBER, 2023',
        title: 'Software Developer Internship',
        description: 'Completed internship as Software Developer at Brototype'
    }
];

const Education = () => {
    const isMobile = useBreakpointValue({ base: true, md: false });
    const isDesktop = useBreakpointValue({ base: false, md: true });

    return (
        <Container 
            maxWidth="7xl" 
            maxHeight={'3xl'} 
            overflowX={'auto'} 
            p={{ base: 2, sm: 10 }}
            mt={3}
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
                <Flex key={milestone.id} mb="0px">
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

const Card = ({ id, title, description, date }) => {
    // For even id show card on left side
    // For odd id show card on right side
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
            minHeight="50px"
        >
            <chakra.span
                position="absolute"
                left="50%"
                transform="translateX(-50%)"
                height="100%"
                border="1px solid"
                borderColor={useColorModeValue('gray.400', 'gray.700')}
                top="0"
            ></chakra.span>
            <Box pos="relative" p="10px">
                <Box
                    pos="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    width="100%"
                    height="100%"
                    background={useColorModeValue('purple.800', 'purple.200')}
                    borderRadius="full"
                ></Box>
            </Box>
        </Flex>
    );
};

const EmptyCard = () => {
    return <Box flex={{ base: 0, md: 1 }} p={{ base: 0, md: 6 }} bg="transparent"></Box>;
};

export default Education;