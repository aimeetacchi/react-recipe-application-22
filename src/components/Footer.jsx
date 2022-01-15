import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterStyles>
            <small>Website made with love. By <a target="_blank" rel="noreferrer" href="https://aimeetacchi.dev">Aimee Tacchi</a></small>
        </FooterStyles>
    )
}

const FooterStyles = styled.footer`
    background-color: whitesmoke;
    height: 10vh;
    box-sizing: border-box;
    padding: 35px 0;
    text-align: center;
  `;
  

export default Footer
