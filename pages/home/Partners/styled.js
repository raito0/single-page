import styled from 'styled-components';
const Partners = styled.main`
    padding: 80px 0px;
`;
Partners.Box = styled.div `
    width: 100%; 
`;
Partners.Head = styled.p `
    font-size: 30px; 
    text-align: center; 
    color: #374173;
    font-family: National-BoldItalic;
`
Partners.Container = styled.div `
@media (min-width: 960px) {
   padding-left: 95px;
   padding-right: 80px;
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
Partners.Item = styled.div `
    @media (max-width: 400px) {
        width: 50%;
        img {
            width: 100%;
        }
    }
`
export default Partners;