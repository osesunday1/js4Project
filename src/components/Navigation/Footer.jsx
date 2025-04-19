import { NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaSnapchatGhost, FaTwitter } from "react-icons/fa";
import styled from 'styled-components';

const FooterContainer = styled.footer`
    background: #f9fafb;
    color: white;
    
    text-align: center;
`;

const FooterContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 20px;
    background:var(--purple0);
    padding: 2em 0px 0px 0px;
`;

const FooterSection = styled.div`
    flex: 1;
    min-width: 200px;
    margin: 10px;

    h4 {
        font-size: 18px;
        color: var(--red-color);
    }

    p {
        font-size: 14px;
        line-height: 1.5;
    }

    ul {
        list-style: none;
        padding: 0;

        li {
            margin-bottom: 10px;

            a {
                color: white;
                text-decoration: none;
                transition: color 0.3s;

                &:hover {
                    color: var(--red-color);
                }
            }
        }
    }
`;

const SocialIcons = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;

    a {
        margin: 0 10px;

        img {
            width: 30px;
            height: 30px;
            filter: invert(1);
            transition: filter 0.3s;

            &:hover {
                filter: invert(0.5);
            }
        }
    }
`;

const FooterBottom = styled.div`
    background-color: #222;
    padding: 20px 0;
    margin-top: 20px;

    p {
        margin: 0;
        font-size: 14px;
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterSection>
                    <h4>About Us</h4>
                    <p>We are dedicated to providing the best software applications in in Canada.</p>
                </FooterSection>
                <FooterSection>
                    <h4>Contact Information</h4>
                    <p>Email: grahouglo@gmail.com</p>
                    <p>Phone: 2263867007</p>
                </FooterSection>
                <FooterSection>
                    <h4>Quick Links</h4>
                    <ul>
                        <li><NavLink to='/home'>Home</NavLink></li>
                        <li><NavLink to='/about'>About Us</NavLink></li>
                        <li><NavLink to='/projects'>Projects</NavLink></li>
                    </ul>
                </FooterSection>
                
            </FooterContent>
        </FooterContainer>
    );
};

export default Footer;