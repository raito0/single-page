import styled from 'styled-components';

const Subcribe = styled.main`
    padding: 30px 0px;
    color: #ffffff;
`;
Subcribe.Head = styled.p`
    font-weight: bold;
    font-size: 28px;
    text-align: center
`;
Subcribe.Input = styled.input`
    border: 0;
    outline: 0;
    border-bottom: 1px solid #ffffff;
    font-size: 1rem;
    color: #ffffff;
    background-color: #324099;
    padding: 0 100px 0 0px;
    ::placeholder {
        color: #ffffff
    }
`

Subcribe.Container = styled.div`
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
export default Subcribe;