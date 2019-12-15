import Footer from './styled';
import { Grid } from '@material-ui/core';
import { Facebook, Instagram } from '@material-ui/icons';
import List from './List';

export default () => {
    const directionAbout = { title: "About", content: ["About", "meet the team", "contact"] };
    const directionFestivalInfo = { title: "2020 festival info", content: ["full programme", "film & panels", "workshops", "ticketing", "getting there"] };
    const mymentalcare = { title: "#mymentalcare", content: ["personal stories", "share your story", "mental health short film", "helpines"] };
    const supportUs = { title: "support us", content: ["be voluntee", "be a festival sponsor"] };
    const shop = { title: "shop" }
    return (
        <Footer>
            <Footer.Container>
                <Grid
                    container
                    direction="row"
                    justify="center">
                    <Footer.Item>
                        <Footer.Head>Need Help?</Footer.Head>
                        <p style={{ flexDirection: "column", display: "flex" }}><span style={{ fontWeight: "bold" }}>Samaritans of Singapore</span><span>1800 221 4444 (24 hours)</span></p>
                        <p style={{ flexDirection: "column", display: "flex" }}><span style={{ fontWeight: "bold" }}>IMH Mental Health Helpine</span><span>6389 2222 (24 hours)</span></p>
                        <Footer.Head>Question?</Footer.Head>
                        <p><span style={{ fontWeight: "bold" }}>contact@thebreathemovement.org</span></p>
                        <Facebook style={{ color: "pink" }} />
                        <Instagram style={{ color: "pink" }} />
                    </Footer.Item>
                    <Footer.Item>
                        <Footer.Head>Directory</Footer.Head>
                        <Footer.Directory>
                            <List list={directionAbout} />
                            <List list={mymentalcare} />
                            <List list={directionFestivalInfo} />
                            <List list={supportUs} />
                        </Footer.Directory>
                    </Footer.Item>
                    <Footer.Item>
                        <p><span style={{ fontWeight: "bold" }}>#MYMENTALCARE</span></p>
                        <a href="/"><img src="https://i.ibb.co/VpvGSsB/image.png" alt="image" border="0" /></a>
                    </Footer.Item>
                </Grid>


            </Footer.Container>
        </Footer>)
}