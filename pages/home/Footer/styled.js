import styled from 'styled-components';
import {up,down} from 'styled-breakpoints';
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
    @media (min-width: 690px) {
    width: 33%
}
`;
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
Footer.Directory = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items:center;
    width: 100%
`
export default Footer;