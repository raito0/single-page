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
  @media (max-width: 768px) { 
    justify-content: center;
  }
`;
Main.Line = styled.div `
  border: 1px solid #374173;
  padding: 0 0 100px 0;
@media (max-width: 768px) { 
  display: none;
}
`
Main.Festival = styled.p `
  font-size: 30px;
  font-weight: bold;
  margin: 20px;
  @media (max-width: 768px) { 
    display: none;
  }
`
Main.Logo = styled.div `
  width: 30%
`
Main.Head = styled.p `
  text-align: center;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  font-size: 26px;
  position: relative;
`
Main.Content = styled.p `
  position: relative;

`

export default Main