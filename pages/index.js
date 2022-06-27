import NextLink from 'next/link'
import {
    Button,
    Container,
    Box,
    Heading,
    Image,
    Link,
    List,
    ListItem,
    Icon,
    useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'

// Maybe later
// import { BioSection, BioYear } from '../components/bio'
// import { GridItem } from '../components/grid-item'
import {
    IoLogoGithub,
    IoLogoLinkedin,
} from 'react-icons/io5'
import Slider from '../components/slider'

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box
                    borderRadius="lg"
                    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                    p={3}
                    mb={6}
                    align="center"
                >
                    Hallo!
                </Box>

                <Box display={{md: 'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Andreas Hacker
                        </Heading>
                        <p>Developer</p>
                    </Box>
                    <Box
                        flexShrink={0}
                        mt={{ base: 4, md: 0 }}
                        ml={{ md: 6 }}
                        align="center"
                    >
                        <Image
                            borderColor="whiteAlpha.800"
                            borderWidth={2}
                            borderStyle="solid"
                            maxWidth="100px"
                            display="inline-block"
                            borderRadius="full"
                            src="/images/andreas.png"
                            alt="Profile Image"
                        />
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Über mich
                    </Heading>
                    <Paragraph>
                        Software Developer mit Spaß und Ehrgeiz am Lernen und Weiterentwicklen. Stets auf der Suche nach komplexen Herausforderungen.
                    </Paragraph>
                    <Slider />
                    <Paragraph>
                        Außerdem Fachmann für elektronischen Datenaustausch (EDI): B2B-Integration, Mapping-Programmierung (XSLT) und Erstellen von Schnittstellen-Guidelines.
                    </Paragraph>
                    <br />
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                                Mein Portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        Social
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://de.linkedin.com/in/andreas-hacker-0a5073206" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<Icon as={IoLogoLinkedin} />}
                                >
                                    @Andreas Hacker
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://github.com/Andreas1593" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<Icon as={IoLogoGithub} />}
                                >
                                    @Andreas1593
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page