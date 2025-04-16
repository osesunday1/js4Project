import { useEffect } from 'react';
import styled from 'styled-components';
import ScrollReveal from 'scrollreveal';
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";






const Section = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 100px;
  background: var(--purple1);


  h2{
    color: var(--purple0)
  }
  h3{
    color: var(--white0)
  }
  h4{
    color: var(--yello0)
  }
  p{
    color: var(--white0)
  }

  @media (max-width: 768px) {
    padding: 80px 0px;
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100vw;
  }
`;

const MainTitle = styled.h2`
  font-size: 3em;
  margin: 0 auto;
  max-width: 1200px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    margin-bottom: 0px;
  }
`;

const Content = styled.div`
  position: relative;
  max-width: 1150px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding:0px ;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  position: relative;
  width: 800px;
  height: 400px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 90%;
    background: #fff;
  }
`;


const Image = styled.img`
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const ImageStat = styled.div`
  z-index: 4;
  display: flex;
  position: relative;
  width: 500px;
  height: 300px;
  overflow: hidden;
  transform: translate(200px, -30px);

  @media (max-width: 768px) {
    transform: translate(-140px, 90px)
  }

`;

const ImageStatBaby1 = styled.img`
  z-index: 4;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;


const TextBox = styled.div`
  z-index: 3;
  background: var(--purple0);
  backdrop-filter: blur(20px);
  padding: 20px;
  max-width: 400px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  transform: translate(-80px, 50px);

  @media (max-width: 768px) {
    transform: translate(40px, -50px)
  }
`;

const TextBoxTitle = styled.h3`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const MediaIcons = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
`;

const MediaIconLink = styled.a`
  color: var(--orange0);
  font-size: 4em;
  margin: 0 60px;
  text-decoration: none;

  &:hover {
    color: var(--purple0); 
  }

  @media (max-width: 550px) {
    margin: 0 30px;
  }
`;

const Intro = () => {

    useEffect(() => {
        ScrollReveal().reveal('.sec-01', {
          distance: '60px',
          duration: 2500,
          delay: 400,
          reset: false,
          origin: 'bottom'
        });
    
        ScrollReveal().reveal('.sec-01 h2', {
          distance: '100px',
          duration: 2500,
          delay: 500,
          origin: 'left'
        });
    
        ScrollReveal().reveal('.sec-01 img', {
          distance: '60px',
          duration: 2500,
          delay: 600,
          origin: 'right'
        });

        ScrollReveal().reveal('.sec-01 .baby', {
            distance: '60px',
            duration: 2500,
            delay: 600,
            origin: 'left'
          });
      
    
        ScrollReveal().reveal('.sec-01 p', {
          distance: '60px',
          duration: 2500,
          delay: 700,
          origin: 'bottom'
        });

        ScrollReveal().reveal('.sec-01 .icon', {
          distance: '60px',
          delay: 1000,
          duration: 2500,
          origin: 'right',
          interval: 200
        });
      }, []);

  return (
    <>
      <Section className="sec-01">
        <Container style={{marginTop:'3em'}}>
          <MainTitle>Empowering Businesses with Technology</MainTitle>
          <Content>
            <ImageStat>
                <ImageStatBaby1 className="baby" src="./img3.png" />
            </ImageStat>
            <ImageWrapper>
                <Image src="./img1.png" alt="Description" />
            </ImageWrapper>
            <TextBox>
              <TextBoxTitle>Customized IT Services</TextBoxTitle>
              <p>No two businesses are the same, and neither are their IT needs. That is why we offer customized IT services that align with your specific requirements.</p>
            </TextBox>
          </Content>
          {/* Media Icons Section */}
          <social>
            <MediaIcons className="media-icons">
                <MediaIconLink  href="#" className="icon"><FaFacebook /></MediaIconLink>
                <MediaIconLink href="#" className="icon"><FaInstagram /></MediaIconLink>
                <MediaIconLink href="#" className="icon"><FaXTwitter /></MediaIconLink>
                <MediaIconLink href="#" className="icon"><FaYoutube /></MediaIconLink>
              </MediaIcons>
          </social>
        </Container>
         
      </Section>

     
    </>
  );
};

export default Intro;