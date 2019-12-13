import styled from 'styled-components'

const Footer = styled.div`
    padding: 60px 0px;
    color: #ffffff;
    font-size: 13px
`;
Footer.Head = styled.p`
    font-weight: bold;
    font-size:20px
`
Footer.Item = styled.div`
    flex-direction: column;
`
Footer.Container = styled.div `
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
export default Footer;