import styled from 'styled-components'

const Main = styled.main`
  padding: 30px 0px;
  color: #374173
`;
Main.Right = styled.div `
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 350px;
  @media (max-width: 768px) { 
    justify-content: center;
  }
`;
Main.Line = styled.div `
  border: 1px solid #374173;
  flex-grow: 1;
  height: 1px;
  transform: rotate(-90deg);
  width: 600%;
left: -66px;
position: relative;
@media (max-width: 768px) { 
  display: none;
}
`
Main.Festival = styled.p `
  font-size: 30px;
  width: 600%;
  position: relative;
  right: 109px;
  @media (max-width: 768px) { 
    display: none;
  }
`
Main.Logo = styled.div `

`
Main.Head = styled.p `
  text-align: center;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  font-size: 26px;
  position: relative;
    top: -75px;
`
Main.Content = styled.p `
  position: relative;
  top: -70px;

`

export default Main