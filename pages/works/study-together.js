import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Study together!">
            <Container>
                <Title>
                    Study together! <Badge>2021</Badge>
                </Title>
                <P>
                    Eine Progressive Web App zum gemeinschaftlichen Erstellen und Üben von Kartei-Karten innerhalb von Gruppen.
                </P>
                <br />
                <P>
                    Man erstellt <span style={{ color: 'green' }}>Gruppen</span> oder tritt diesen bei.
                    Jedes Mitglied kann <span style={{ color: 'green' }}>Themen</span> sowie dazugehörige <span style={{ color: 'green' }}>Kartei-Karten</span> erstellen 
                    und die Karten der anderen lesen. Das spart redundantes Erstellen von Kartei-Karten und motiviert zum gemeinschaftlichen Lernen, z. B. innerhalb einer 
                    Schulklasse.
                </P>
                <P>
                    Zusätzlich gibt es die <span style={{ color: 'green' }}>Funktion</span>, alle Karten eines Themas abfragen zu lassen, wobei richtig beantwortete Karten 
                    entfernt und falsch beantwortete am Ende erneut abgefragt werden. Feedback erhält man durch eine persönliche <span style={{ color: 'green' }}>Quote</span>, 
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
                        <span>Django, jQuery, PostgreSQL</span>
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