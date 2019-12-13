import ListFeature from './styled';
import { Grid } from '@material-ui/core';

export default () =>
    <ListFeature>
        <ListFeature.Container>
            <Grid
                container
                direction="row"
                justify="space-around"
                alignContent="flex-end"
                wrap="wrap"
            >
                <ListFeature.Content>
                    <ListFeature.ContentHead>11</ListFeature.ContentHead>
                    <div><p style={{ display: "flex", flexDirection: "column" }}><span>Feature+</span> <span>Short Films</span></p></div>
                </ListFeature.Content>
                <ListFeature.Content>
                    <ListFeature.ContentHead>8</ListFeature.ContentHead>
                    <div><p style={{ display: "flex", flexDirection: "column" }}><span>Panel</span><span>Discussions</span></p></div>
                </ListFeature.Content>
                <ListFeature.Content>
                    <ListFeature.ContentHead>8</ListFeature.ContentHead>
                    <div><p style={{ display: "flex", flexDirection: "column" }}><span>Mindfulness</span><span>Workshops</span></p></div>
                </ListFeature.Content>
                <ListFeature.Content>
                    <ListFeature.ContentHead>30+</ListFeature.ContentHead>
                    <div><p style={{ display: "flex", flexDirection: "column" }}><span>Industry Experts</span><span>Person-in-charge {"&"} Caregivers</span></p></div>
                </ListFeature.Content>
                <ListFeature.Content>
                    <ListFeature.ContentHead>800+</ListFeature.ContentHead>
                    <div><p><span>Engaged Youths {"&"} Caregivers</span></p></div>
                </ListFeature.Content>
                <ListFeature.Content>
                    <ListFeature.ContentHead>1500+</ListFeature.ContentHead>
                    <div><p style={{ display: "flex", flexDirection: "column" }}><span>Social-minded</span><span>Festival-goers</span></p></div>
                </ListFeature.Content>
            </Grid>
        </ListFeature.Container>
    </ListFeature>