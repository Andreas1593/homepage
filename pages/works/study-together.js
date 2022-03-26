import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Green from '../../components/green'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Study together!">
            <Container>
                <Title>
                    Study together! <Badge>2021</Badge>
                </Title>
                <P>
                    Eine <Green>Progressive Web App</Green> zum gemeinschaftlichen Erstellen und Üben von Kartei-Karten innerhalb von
                    <Green> Gruppen</Green>. Das spart redundantes Erstellen von Karten und motiviert zum gemeinschaftlichen 
                    Lernen, z. B. innerhalb einer Schulklasse.
                </P>
                <br />
                <P>
                    Über die &quot;<Green>Study!</Green>&quot;-Funktion lassen sich alle Karten eines Themas abfragen. Feedback erhält man durch eine persönliche <Green>Quote</Green>, 
                    wie oft Karten auf den ersten Versuch richtig beantwortet wurden.
                </P>
                <br />
                <b>Demo-Account:</b><br />
                Username: <i>demo_user</i><br />
                Passwort: <i>demo_user</i>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://studytogetherapp.herokuapp.com/' target="_blank">
                        https://studytogetherapp.herokuapp.com/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Django, jQuery, Bootstrap, PostgreSQL</span>
                    </ListItem>
                </List>

                <WorkImage thumb="/images/works/study-together-study.gif" image="/images/works/study-together-study.gif" alt="Study together!" />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ maxWidth: 180 }}>
                        <WorkImage thumb="/images/works/study-together-mobile.gif" image="/images/works/study-together-mobile.gif" alt="Mobile View" />
                    </div>
                </div>
            </Container>
        </Layout>
    )
}

export default Work