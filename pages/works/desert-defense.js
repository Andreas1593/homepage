import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkVideo, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Desert Defense">
            <Container>
                <Title>
                    Desert Defense <Badge>2021</Badge>
                </Title>
                <P>
                    Ein <span style={{ color: 'green' }}>3D-Spiel</span> im beliebten &quot;Tower Defense&quot;-Stil. Es erscheinen Wellen an Gegnern, die einen bestimmten Weg entlang laufen.
                    Das Ziel des Spielers ist es, Geschütztürme zu bauen, die automatisch schießen, um die Gegner zu töten, bevor sie das Ende erreichen.
                    Das Schwierige dabei ist, dass die Ressourcen für den Bau begrenzt sind.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Download</Meta>
                        <Link href='https://github.com/Andreas1593/CS50x/tree/Final-Project' target="_blank">
                        https://github.com/Andreas1593/CS50x/tree/Final-Project <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/macOS/Linux</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Unity, C#</span>
                    </ListItem>
                </List>

                <WorkVideo embedId="hEbOJ6oNto4" />
            </Container>
        </Layout>
    )
}

export default Work