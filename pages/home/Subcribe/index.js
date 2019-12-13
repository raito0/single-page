import Subcribe from './styled';
import { Grid, TextField, Button } from '@material-ui/core';
import {
    createMuiTheme,
} from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { amber } from '@material-ui/core/colors';
const theme = createMuiTheme({
    palette: {
        primary: amber,
    },
});
export default () => {
    return (
        <Subcribe>
            <Subcribe.Container>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center">
                    <div><Subcribe.Head>Subcribe for exclusive updates on our 2020 Programme!</Subcribe.Head></div>
                    <div>
                        <form style={{textAlign: 'center'}}>
                            <ThemeProvider theme={theme}>
                            <Subcribe.Input placeholder="Email" type="text" name="fname" autoFocus />
                            </ThemeProvider>
                            <Button style={{ border: "1px solid #ffffff", color: "#ffffff", margin: "12px 71px", padding: "0px 41px" }}> SUBCRIBE</Button>
                        </form></div>
                </Grid>
            </Subcribe.Container>
        </Subcribe>
    );
}