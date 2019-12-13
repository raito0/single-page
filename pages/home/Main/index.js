import { Grid } from '@material-ui/core'
import Main from './styled'

export default () =>
  <Main>
    <Grid
      container
      direction="row"
      justify="space-around"
      alignItems="flex-start"
    >
      <div><a href="/"><img src="https://i.ibb.co/Sd80fTJ/Image1.jpg" alt="Image1" border="0" style={{ width: "100%" }} /></a></div>
      <Grid
        style={{ width: "50%" }}
      >
        <Main.Right>
          <Main.Logo><a href="https://imgbb.com/"><img src="https://i.ibb.co/1GXg5G5/Image2.jpg" alt="Image2" border="0" /></a></Main.Logo>
          <Main.Line />
          <Main.Festival>Singapore Mental Health Film Festival</Main.Festival>
        </Main.Right>
        <Main.Head><span>February 27 - March 1, 2020</span><span>National Galley Singapore</span></Main.Head>
        <Main.Content>
          The Singapore Mental Health Film Festival (SMHFF) aims to challenge the social stigma surrounding mental illness and decrease the discrimination faced by those affected by it.
        </Main.Content>
        <Main.Content>
          Films, panel discussions, and workshops will be used as modalities to foster a spirit of compassion and acceptance; with the understanding that we all have personal stories and that having a mental illness does not make us any less of a human being.
        </Main.Content>
      </Grid>
    </Grid>
  </Main>