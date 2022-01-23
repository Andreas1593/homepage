import { Box, Container, Heading, Link, List, ListIcon, ListItem, SimpleGrid } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import ModalImage from 'react-modal-image';

const Cs50x = () => {
    return (
        <Layout title="CS50W">
            <Container>
                
                <Heading as="h3" fontSize={20} mb={4}>
                    CS50W
                </Heading>
            <Box>
                <ModalImage
                    small={"/images/contents/cs50w-certificate-thumb.png"}
                    large={"/images/contents/cs50w-certificate.png"}
                    alt="CS50W Verified Certificate"
                    hideDownload="true"
                />
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Beschreibung
                </Heading>
                <Paragraph>
                    <Link href="https://cs50.harvard.edu/web/2020/" target="_blank">
                        CS50W
                    </Link>
                    {' '} ist eine Fortsetzung von {' '}
                    <Link href="https://cs50.harvard.edu/college/2021/fall/" target="_blank">
                    CS50
                    </Link>
                    {' '} zur Vertiefung von Fähigkeiten im Bereich Web-Entwicklung.

                    <blockquote style={quote}>
                        <Paragraph>
                            &quot;Dieser Kurs setzt dort an, wo CS50x aufhört und vertieft das Design und die Implementierung von Webanwendungen mit Python, 
                            JavaScript und SQL unter Verwendung von Frameworks wie Django, React und Bootstrap. Zu den Themen gehören Datenbankdesign, 
                            Skalierbarkeit, Sicherheit und Benutzerfreundlichkeit. Anhand praktischer Projekte lernen die Studierenden, APIs zu schreiben 
                            und zu verwenden, interaktive Benutzeroberflächen zu erstellen und Cloud-Dienste wie GitHub und Heroku zu nutzen. Am Ende des 
                            Semesters verfügen die Studierenden über Kenntnisse und Erfahrungen mit Prinzipien, Sprachen und Tools, die sie in die Lage 
                            versetzen, Anwendungen im Internet zu entwerfen und bereitzustellen.&quot;
                        </Paragraph>
                    </blockquote>
                </Paragraph>
            </Section>

            <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Inhalt
                    </Heading>
                    <Paragraph>
                        Der Kurs beeinhaltet neun Einheiten:
                        <List
                            mx={3}
                            style={{
                                textIndent: "-23px",
                                paddingLeft: "40px"
                            }}
                        >
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color='green.500' />
                                HTML, CSS
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color='green.500' />
                                Git
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color='green.500' />
                                Python
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color='green.500' />
                                Django
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color='green.500' />
                                SQL, Models, and Migrations
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color='green.500' />
                                JavaScript
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color='green.500' />
                                User Interfaces
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color='green.500' />
                                Testing, CI/CD
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color='green.500' />
                                Scalability and Security
                            </ListItem>
                        </List>
                        <Box m={2}>
                            Begleitend dazu werden fünf Projekte sowie ein Abschluss-Projekt erstellt.
                        </Box>
                    </Paragraph>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        Aus dem Kurs
                    </Heading>
                    <SimpleGrid columns={[1,1,2]} gap={6}>
                        <Section>
                            <ProjectGridItem image="/images/contents/hardvard-standard.png" thumb="/images/contents/hardvard-standard-thumb.png" alt="Harvard Standard">Harvard Standard</ProjectGridItem>
                        </Section>
                        <Section>
                            <ProjectGridItem image="/images/contents/project-1-wiki.png" thumb="/images/contents/project-1-wiki-thumb.png" alt="Project 1 - Wiki">Project 1 - Wiki</ProjectGridItem>
                        </Section>
                        <Section>
                            <ProjectGridItem image="/images/contents/project-2-commerce_01.png" thumb="/images/contents/project-2-commerce_01-thumb.png" alt="Project 4 - Commerce">Project 2 - Commerce</ProjectGridItem>
                        </Section>
                        <Section>
                            <ProjectGridItem image="/images/contents/project-2-commerce_02.png" thumb="/images/contents/project-2-commerce_02-thumb.png" alt="Project 4 - Commerce (Artikel)">Project 2 - Commerce (Artikel)</ProjectGridItem>
                        </Section>
                        <Section>
                            <ProjectGridItem image="/images/contents/project-4-network.png" thumb="/images/contents/project-4-network-thumb.png" alt="Project 4 - Network">Project 4 - Network</ProjectGridItem>
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