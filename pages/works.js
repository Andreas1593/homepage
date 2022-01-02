import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbPackageViewer from '../public/images/works/package-viewer_eyecatch.png'
import thumbStudyTogether from '../public/images/works/study-together_eyecatch.png'
import thumbDesertDefense from '../public/images/works/desert-defense_eyecatch.png'

const Works = () => {
    return (
        <Layout title="Projekte">
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Projekte
                </Heading>

                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section>
                        <WorkGridItem id="package-viewer" title="EDI Center Package Viewer" thumbnail={thumbPackageViewer}>
                            Eine Web App zum Auslesen und Darstellen von DESADV-Nachrichten im Handel
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="study-together" title="Study together!" thumbnail={thumbStudyTogether}>
                            Eine Progressive Web App zum gemeinschaftlichen Erstellen und Üben von Kartei-Karten innerhalb von Gruppen
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="desert-defense" title="Desert Defense" thumbnail={thumbDesertDefense}>
                            Ein &quot;Tower Defense&quot;-Spiel in 3D, erstellt mit Unity
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works