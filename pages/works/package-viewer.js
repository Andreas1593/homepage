import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="EDI Center Package Viewer">
            <Container>
                <Title>
                    EDI Center Package Viewer <Badge>2021</Badge>
                </Title>
                <P>
                    Eine Web App zum Auslesen und Darstellen von DESADV-Nachrichten. Deren Packstücke werden tabellarisch sowie in einer interaktiven 3D-Umgebung dargestellt.
                </P>
                <br />
                <P>
                    <Link href="https://www.edicenter.de/22-05-2019-desadv-was-ist-das-eigentlich/" target="_blank">
                        DESADV
                    </Link>
                    {' '} (despatch advice) ist ein elektronisches Lieferavis im {' '}
                    <Link href="https://www.edicenter.de/was-ist-edi-und-was-ist-edifact/" target="_blank">
                        EDIFACT-Format
                    </Link>
                    {' '} und ein übliches Format im Handel.
                    Es kann zusätzlich zu den Lieferscheindaten genaue Versandinformationen zu den Packstücken liefern.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://www.edicenter.de/desadv_viewer/' target="_blank">
                        https://www.edicenter.de/desadv_viewer/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Flask, Three.js</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/package-viewer.png" alt="Package Viewer" />
                <WorkImage src="/images/works/package-viewer.gif" alt="3D-Ansicht" />
            </Container>
        </Layout>
    )
}

export default Work