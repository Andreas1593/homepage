import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Time Tracker">
            <Container>
                <Title>
                    Time Tracker <Badge>2022</Badge>
                </Title>
                <P>
                    Eine kleine Windows-Applikation zum &quot;tracken&quot; der Zeit während man an einem Projekt oder 
                    Ähnlichem arbeitet. Pausiert automatisch nach einer Minute Inaktivität und unterstützt PDF-Export der Zeiten.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Source</Meta>
                        <Link href='https://github.com/Andreas1593/timetracker' target="_blank">
                        https://github.com/Andreas1593/timetracker <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Windows Forms (.NET 6)</span>
                    </ListItem>
                </List>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ maxWidth: 180 }}>
                        <WorkImage thumb="/images/works/time-tracker-thumb.png" image="/images/works/time-tracker.png" alt="Time Tracker" />
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ maxWidth: 180 }}>
                        <WorkImage thumb="/images/works/time-tracker-pdf-thumb.png" image="/images/works/time-tracker-pdf.png" alt="PDF-Export" />
                    </div>
                </div>
            </Container>
        </Layout>
    )
}

export default Work