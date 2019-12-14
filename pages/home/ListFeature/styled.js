import styled from 'styled-components';

const ListFeature = styled.main`
  padding: 30px 0px;
  color: #ffffff;
`;
ListFeature.Content = styled.div `
  display: flex;
  flex-direction: column;
`
ListFeature.ContentHead = styled.p `
  color: #F56B8D;
  font-weight: bold;
  font-size: 30px
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
    padding-left: 16px;
    padding-right: 16px;
 }
`
export default ListFeature;