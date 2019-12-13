import { createGlobalStyle } from 'styled-components'
export default createGlobalStyle`
@font-face {
  font-family: National-Bold;
  src: url(/static/National-Bold.otf);
}
@font-face {
  font-family: National-BoldItalic;
  src: url(/static/National-BlackItalic.otf);
}
@font-face {
  font-family: National-Regular;
  src: url(/static/National-Regular.otf);
}
body {
  font-family: National-Regular;
  color: #000;
}
`