import React from 'react'
import { Box, Container, Flex, Heading, Text, Wrap } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Projects from './Projects'
import CustomSkillTag from './utils/CustomSkillTag'
import FrameworkTag from './utils/FrameworkTag'
import ToolTag from './utils/ToolTag'

// Create motion-enabled versions of Chakra UI components
const MotionContainer = motion(Container)
const MotionFlex = motion(Flex)
const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)

export default function SkillsProjects() {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0, y: 100 }, // Start from below (100px)
        visible: {
            opacity: 1,
            y: 0, // Move to original position
            transition: {
                duration: 0.8, // Animation duration
                ease: "easeOut", // Smooth easing
                delayChildren: 0.2,
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 }, // Start slightly below
        visible: {
            opacity: 1,
            y: 0, // Move to original position
            transition: {
                duration: 0.5
            }
        }
    }

    return (
        <MotionContainer 
            maxW={'7xl'} 
            alignItems='center' 
            my={5}
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the container is in view
        >
            <MotionFlex 
                width={'100%'} 
                maxW={['full', 'full', '7xl']} 
                justifyContent='center' 
                alignItems={'center'} 
                flexDir={['column', 'column', 'row', 'row']}
                variants={containerVariants}
            >
                {/* Projects Section */}
                <MotionBox 
                    variants={itemVariants}
                    me={['0', '0', '8']} 
                    flexDir={'column'} 
                    justifyContent='space-between' 
                    bgColor={'white'} 
                    color='black' 
                    maxHeight='4xl' 
                    scrollBehavior={'smooth'} 
                    minHeight={'4xl'} 
                    borderRadius='3xl' 
                    p='10' 
                    mb={10}
                >
                    <MotionHeading 
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                    >
                        Projects
                    </MotionHeading>
                    <Projects />
                </MotionBox>

                {/* Skills Section */}
                <MotionFlex 
                    variants={itemVariants}
                    id='skills' 
                    width={['sm', 'md', 'md']} 
                    flexDir={'column'} 
                    justifyContent='start' 
                    bgColor={'white'} 
                    color='black' 
                    maxHeight='2xl' 
                    minHeight={'4xl'} 
                    borderRadius='3xl' 
                    p='10' 
                    mb={10}
                >
                    <MotionHeading 
                        textAlign={'start'}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                    >
                        Skills
                    </MotionHeading>

                    <MotionText 
                        variants={itemVariants}
                        fontSize={'sm'} 
                        textAlign='start'
                    >
                        My skills, which I constantly keep improving.
                    </MotionText>

                    {/* Programming Languages */}
                    <MotionBox 
                        variants={itemVariants}
                        my={5}
                    >
                        <MotionHeading 
                            textAlign={'start'} 
                            as='h4' 
                            fontSize={'lg'}
                            variants={itemVariants}
                        > 
                            Programming Languages
                        </MotionHeading>

                        <Box orientation='horizontal' bgColor='gray.300' my={3} height={0.2} />

                        <Wrap>
                            {['Javascript', 'HTML', 'CSS', 'PHP'].map((skill, index) => (
                                <motion.div
                                    key={skill}
                                    variants={itemVariants}
                                >
                                    <CustomSkillTag skill={skill} />
                                </motion.div>
                            ))}
                        </Wrap>
                    </MotionBox>

                    {/* Frameworks/Libraries */}
                    <MotionBox 
                        variants={itemVariants}
                        my={2}
                    >
                        <MotionHeading 
                            textAlign={'start'} 
                            as='h4' 
                            fontSize={'lg'}
                            variants={itemVariants}
                        >
                            Frameworks/Libraries
                        </MotionHeading>
                        <Box orientation='horizontal' bgColor='gray.300' my={3} height={0.2} />
                        <Wrap>
                            {['React JS', 'Express JS', 'WordPress', 'Next.js', 'Bootstrap', 'Material-UI', 'Tailwind CSS', 'Node.js', 'Mongoose', 'Redux Toolkit'].map((skill, index) => (
                                <motion.div
                                    key={skill}
                                    variants={itemVariants}
                                >
                                    <FrameworkTag skill={skill} />
                                </motion.div>
                            ))}
                        </Wrap>
                    </MotionBox>

                    {/* Other Tools */}
                    <MotionBox 
                        variants={itemVariants}
                        my={5}
                    >
                        <MotionHeading 
                            textAlign={'start'} 
                            as='h4' 
                            fontSize={'lg'}
                            variants={itemVariants}
                        >
                            Other Tools
                        </MotionHeading>

                        <Box orientation='horizontal' bgColor='gray.300' my={2} height={0.2} />

                        <Wrap>
                            {['Docker', 'Postman', 'VS Code', 'GitHub', 'Figma', 'Cloudinary', 'Netlify', 'pabbly'].map((skill, index) => (
                                <motion.div
                                    key={skill}
                                    variants={itemVariants}
                                >
                                    <ToolTag skill={skill} />
                                </motion.div>
                            ))}
                        </Wrap>
                    </MotionBox>
                </MotionFlex>
            </MotionFlex>
        </MotionContainer>
    )
}
