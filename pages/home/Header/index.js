import { Grid } from '@material-ui/core'
import { Header, Menu, Item } from './styled';
import { Facebook, Instagram } from '@material-ui/icons';

export default () =>
    <>
        <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            style={{ padding: "25px 0px" }}
        >
            <div><a href="/"><img src="https://i.ibb.co/0G14dyH/logo.jpg" alt="logo" border="0" /></a></div>
            <Header><span>February 27 - March 1, 2020</span> <span>National Gallery Singapore</span></Header>
        </Grid>
        <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            style={{ border: "1px solid #EB7185", borderLeftWidth: "0", borderRightWidth: "0" }}
        >
            <Menu>
                <a href="#"><Item>ABOUT</Item></a>
                <a href="#"><Item>2020 FESTIVAL INFO</Item></a>
                <a href="#"><Item>#MYMENTALCARE</Item></a>
                <a href="#"><Item>SUPPORT US</Item></a>
                <a href="#"><Item>SHOP</Item></a>
            </Menu>
            <div style={{ color: "#EB7185" }}>
                <Facebook />
                <Instagram />
            </div>
        </Grid>
    </>