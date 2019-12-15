import styled from 'styled-components'
import {up,down} from 'styled-breakpoints'
const Main = styled.main`
  padding: 30px 0px;
  color: #374173
`;
Main.Right = styled.div `
  display:flex;
  flex-direction: row;
`;
Main.Logo = styled.div `
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    width: 70%;
  }
  border-right: 1.5px solid #201C4F;
`
Main.Festival = styled.div `
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  span{
    width:70%;
    font-size: 2.865vw;
    line-height: 1;
    ${down("lg")} {
      font-size:6.865vw;
    }
  }
`
Main.Head = styled.p `
  text-align: center;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  font-size: 1.563vw;
  position: relative;
  ${down("lg")} {
    font-size: 4.563vw;
  }
`
Main.Content = styled.p `
  position: relative;

`
Main.Total = styled.div `
  width: 50%;
  ${down('lg')} {
    width: 100%
  }
`
export default Main