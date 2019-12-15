import styled from 'styled-components';
import {down} from 'styled-breakpoints'
const ListFeature = styled.main`
  padding: 30px 0px;
  color: #ffffff;
`;
ListFeature.Content = styled.div `
  display: flex;
  flex-direction: column;
  ${down('lg')} {
    width: 30%;
  }
  div {
    p {
      ${down('lg')} {
        text-align: center;
      }
    }
  }
`
ListFeature.ContentHead = styled.p `
  color: #F56B8D;
  font-weight: bold;
  font-size: 30px;
  ${down('lg')} {
    text-align: center;
  }
  
`
ListFeature.Container = styled.div `
position: relative;
  top: 20px;
 @media (min-width: 960px) {
  padding: 30px 80px 30px 80px;
 }
 @media (max-width: 960px) {
    width: 100%;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    padding: 10%;
 }
`
export default ListFeature;