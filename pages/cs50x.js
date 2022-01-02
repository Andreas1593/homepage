import { Box, Container, Heading, Link, List, ListIcon, ListItem, SimpleGrid } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import ModalImage from 'react-modal-image';

const Cs50x = () => {
    return (
        <Layout title="CS50x">
            <Container>

                <Heading as="h3" fontSize={20} mb={4}>
                    CS50x
                </Heading>
                <Box>
                    <ModalImage
                        small={"/images/contents/cs50x-certificate.png"}
                        large={"/images/contents/cs50x-certificate.png"}
                        alt="CS50x Verified Certificate"
                        hideDownload="true"
                    />
                </Box>
                
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Beschreibung
                    </Heading>
                    <Paragraph>
                        <Link href="https://cs50.harvard.edu/x/2021/" target="_blank">
                            CS50x
                        </Link>
                        {' '} ist derselbe Kurs wie {' '}
                        <Link href="https://cs50.harvard.edu/college/2021/fall/" target="_blank">
                        CS50
                        </Link>
                        , der von der Harvard University angeboten wird, mit dem Unterschied, dass CS50x für jedermann online zugänglich ist.

                        <blockquote style={quote}>
                            <Paragraph>
                                &quot;In diesem Kurs lernen die Studierenden, wie sie algorithmisch denken und Probleme effizient lösen können.
                                Zu den Themen gehören Abstraktion, Algorithmen, Datenstrukturen, Kapselung, Ressourcenmanagement, Sicherheit,
                                Softwaretechnik und Webprogrammierung. Zu den Sprachen gehören C, Python und SQL sowie HTML, CSS und JavaScript.&quot;
                            </Paragraph>
                        </blockquote>
                    </Paragraph>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Inhalt
                    </Heading>
                    <Paragraph>
                        Der Kurs beeinhaltet elf Einheiten:
                        <List mx={3}>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color='green.500' />
                                Scratch
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color='green.500' />
                                C
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color='green.500' />
                                Arrays
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color='green.500' />
                                Algorithms (Search/Sorting Alg., Running Time, Recursion)
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color='green.500' />
                                Memory (Pointers, Dynamic Memory Allocation, Call Stacks)
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color='green.500' />
                                Data Structures (Linked Lists, Hash Tables, Tries)
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color='green.500' />
                                Python
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color='green.500' />
                                SQL
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color='green.500' />
                                HTML, CSS, JavaScript
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color='green.500' />
                                Flask
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color='green.500' />
                                Ethics
                            </ListItem>
                        </List>
                        <Box m={2}>
                            Begleitend dazu werden zehn &quot;Problem Sets&quot; und elf &quot;Labs&quot; bearbeitet sowie ein Abschluss-Projekt erstellt.
                        </Box>
                    </Paragraph>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        Aus dem Kurs
                    </Heading>
                    <SimpleGrid columns={[1,1,2]} gap={6}>
                        <Section>
                            <ProjectGridItem image="/images/contents/problem-set-4-filter.png" alt="Problem Set 4 - Filter (Edges)">Problem Set 4 - Bild-Manipulation, u. a. Kantendetektions-Filter (geschrieben in C)</ProjectGridItem>
                        </Section>
                        <Section>
                            <ProjectGridItem image="/images/contents/lecture-5-data-structures.png" alt="Lecture 5 - Data Structures">Lecture 5 - Data Structures</ProjectGridItem>
                        </Section>
                        <Section>
                            <ProjectGridItem image="/images/contents/problem-set-9-finance.png" alt="Problem Set 9 - Finance">Problem Set 9 - Simulierter Aktienhandel mit echten Börsenwerten via API</ProjectGridItem>
                        </Section>
                    </SimpleGrid>
                </Section>

            </Container>
        </Layout>
    )
}

const quote = {
    borderLeft: "7px solid #ccc",
    margin: "1.5em 10px",
    padding: "0.5em 10px",
}


export default Cs50x