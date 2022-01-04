import { Box, Container, Heading, Link, List, ListIcon, ListItem, SimpleGrid } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Paragraph2 from '../components/paragraph2'
import ModalImage from 'react-modal-image';

const Cs50x = () => {
    return (
        <Layout title="CS50x">
            <Container>

                <Heading as="h3" fontSize={20} mb={4}>
                    Impressum
                </Heading>
                
                <Section delay={0.1}>
                    Angaben gemäß § 5 TMG
                    <br />
                    <br />
                    Andreas Hacker
                    <br />
                    Klausstr. 28
                    <br />
                    86167 Augsburg
                    <br />
                    <br />
                    E-Mail: ahackerkontakt@gmail.com
                    <br />
                    <br />
                    <br />
                    <Heading as="h4" fontSize={18} mb={4}>Haftungsausschluss</Heading>
                    <Heading as="h4" fontSize={15} mb={2}>Haftung für Inhalte</Heading>
                    <Paragraph2>
                        Die Inhalte meiner Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann ich 
                        jedoch keine Gewährleistung übernehmen. Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                        allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder 
                        gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. 
                        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine 
                        diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von 
                        entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.
                    </Paragraph2>
                    <br />
                    <br />
                    <Heading as="h4" fontSize={15} mb={2}>Haftung für Links</Heading>
                    <Paragraph2>
                        Mein Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte ich keinen Einfluss haben. Deshalb kann ich für diese fremden 
                        Inhalte auch keine Gewährleitung übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
                        Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige 
                        Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne 
                        konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend 
                        entfernen.
                    </Paragraph2>
                    <br />
                    <br />
                    <Heading as="h4" fontSize={15} mb={4}>Urheberrecht</Heading>
                    <Paragraph2>
                        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, 
                        Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des 
                        jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. 
                        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden 
                        Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitte ich um einen 
                        entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Inhalte umgehend entfernen.
                    </Paragraph2>
                    <br />
                    <br />
                    <Heading as="h4" fontSize={15} mb={4}>Datenschutz</Heading>
                    <Paragraph2>
                    Die Nutzung meiner Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf meiner Seite personenbezogene Daten 
                    (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese 
                    Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. Ich weise darauf hin, dass die Datenübertragung im Internet 
                    (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist 
                    nicht möglich. Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht 
                    ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten 
                    sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.
                    </Paragraph2>
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