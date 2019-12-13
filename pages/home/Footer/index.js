import Footer from './styled';
import { Grid } from '@material-ui/core';
import { Facebook, Instagram } from '@material-ui/icons';
export default () =>
    <Footer>
        <Footer.Container>
            <Grid
                container
                direction="row"
                justify="space-around">
                <div style={{ flexDirection: "column" }}>
                    <Footer.Head>Need Help?</Footer.Head>
                    <p style={{ flexDirection: "column", display: "flex" }}><span style={{ fontWeight: "bold" }}>Samaritans of Singapore</span><span>1800 221 4444 (24 hours)</span></p>
                    <p style={{ flexDirection: "column", display: "flex" }}><span style={{ fontWeight: "bold" }}>IMH Mental Health Helpine</span><span>6389 2222 (24 hours)</span></p>
                    <Footer.Head>Question?</Footer.Head>
                    <p><span style={{ fontWeight: "bold" }}>contact@thebreathemovement.org</span></p>
                    <Facebook style={{ color: "pink" }}/>
                    <Instagram style={{ color: "pink" }}/>
                </div>
                <Footer.Item>
                    <Footer.Head>Directory</Footer.Head>
                    <p><span style={{ fontWeight: "bold" }}>ABOUT</span></p>
                    <p><span>ABOUT</span></p>
                    <p><span>MEET THE TEAM</span></p>
                    <p><span>CONTACT</span></p>
                    <p><span style={{ fontWeight: "bold" }}>2020 FESTIVAL INFO</span></p>
                    <p><span>FULL PROGRAMME</span></p>
                    <p><span>FILM {"&"} PANELS</span></p>
                    <p><span>WORKSHOPS</span></p>
                    <p><span>TICKETING</span></p>
                    <p><span>GETTING THERE</span></p>
                </Footer.Item>
                <div style={{ flexDirection: "column" }}>
                    <Footer.Head style={{ color: "#201C4F" }}>.</Footer.Head>
                    <p><span style={{ fontWeight: "bold" }}>#MYMENTALCARE</span></p>
                    <p><span>PERSONAL STORIES</span></p>
                    <p><span>SHARE YOUR STORY</span></p>
                    <p><span>MENTAL HEALTH SHORT FILM</span></p>
                    <p><span>HELPINES</span></p>
                    <p><span style={{ fontWeight: "bold" }}>SUPPORT US</span></p>
                    <p><span>BE VOLUNTEER</span></p>
                    <p><span>BE A FESTIVAL SPONSOR</span></p>
                </div>
                <Footer.Item>
                    <p><span style={{ fontWeight: "bold" }}>#MYMENTALCARE</span></p>
                    <a href="/"><img src="https://i.ibb.co/VpvGSsB/image.png" alt="image" border="0" /></a>
                </Footer.Item>
            </Grid>


        </Footer.Container>
    </Footer>