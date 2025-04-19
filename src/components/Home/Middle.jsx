import styled from "styled-components";
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';


import Card from "../UIElements/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMobileScreen } from '@fortawesome/free-solid-svg-icons';

const Section = styled.section`
  position: relative;
  display: flex;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  padding: 0px 100px;

  h2 {
    color: var(--purple0);
  }
  h3 {
    color: var(--white0);
  }
  h4 {
    color: var(--yello0);
  }
  p {
    color: var(--white0);
  }

  @media (max-width: 550px) {
    padding: 0px 0px;
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;

  @media (max-width: 550px) {
    width: 100vw;
    
  }
`;

const Content = styled.div`
  position: relative;
  max-width: 1150px;
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1090px) {
    max-width: 100vw;
    background-image: url('./img5.png');
    background-size: contain;
    background-repeat: no-repeat;
  }

  @media (max-width: 550px) {
    margin: 0 auto;
    flex-direction: column; 
    align-items: center; 
    justify-content: center; 
    
  }
`;

const ImageWrapper = styled.div`
  width: 800px;
  overflow: hidden;
  @media (max-width: 1090px) {
    display: none;
  }
`;

const Image = styled.img`
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 10px;
  
`;

const SectionTitle = styled.h2`
  font-size: 3em;

  strong {
    color: var(--black0);
  }
  strong2 {
    color: var(--orange0);
  }

  @media (max-width: 550px) {
    font-size: 3em;
    padding: 20px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 700px;
  margin-left: 50px;
  
  @media (max-width: 550px) {
    width: 100%;
    margin-left: 0;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
`;

const Info2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 700px;
  margin-left: 70px;
  transform: translate(-30px, 100px);
  margin-bottom: 120px;

  @media (max-width: 550px) {
    width: 100%;
    margin-left: 0;
    margin: 0 auto;
    transform: none; 
    margin-top: 0px;
    justify-content: center;
    align-items: center;
  }
`;


const Middle = () => {
  useEffect(() => {
    ScrollReveal().reveal('.sec-02', {
      distance: '60px',
      duration: 2500,
      delay: 200,
      reset: false,
      origin: 'left',
    });

    ScrollReveal().reveal('.sec-02 .SectionTitle', {
      distance: '100px',
      duration: 2500,
      delay: 200,
      origin: 'right',
    });

    ScrollReveal().reveal('.sec-02 .Info', {
      distance: '50px',
      duration: 2500,
      delay: 600,
      origin: 'right',
    });

    ScrollReveal().reveal('.sec-02 .Info2', {
      distance: '50px',
      duration: 2500,
      delay: 200,
      origin: 'bottom',
    });

    ScrollReveal().reveal('.sec-03 .SectionTitle', {
      distance: '100px',
      duration: 2500,
      delay: 200,
      origin: 'left',
    });

    ScrollReveal().reveal('.sec-03 .MediaInfo', {
      distance: '50px',
      duration: 2500,
      delay: 300,
      origin: 'bottom',
    });

    ScrollReveal().reveal('.sec-03 .ImageWrapper', {
      distance: '50px',
      duration: 2500,
      delay: 300,
      origin: 'right',
    });
  }, []);

  return (
    <>
      <Section className="sec-02">
        <Container>
          <SectionTitle className="SectionTitle">We Build, <strong>We Innovate,</strong> <strong2>We Deliver</strong2></SectionTitle>
          <Content>
            <ImageWrapper >
              <Image src="./img5.png" alt="Description" />
            </ImageWrapper>
            <Info className="Info">
              <Card
                icon={<FontAwesomeIcon icon={faCode} color="white" size="lg" />}
                title="Web Development"
                description="We craft dynamic web applications that are tailored to your specific needs. Our focus on performance, security, and usability ensures that your web app not only meets but exceeds your expectations."
              />
              <Card
                icon={<FontAwesomeIcon icon={faMobileScreen} color="white" size="lg" />}
                title="Mobile App"
                description="We develop intuitive and engaging phone apps that provide seamless user experiences. Whether you're looking to create an app for iOS, Android, or both, our developers have the expertise to turn your ideas into reality."
              />
            </Info>

            <Info2 className="Info2">
              <Card
                icon={<FontAwesomeIcon icon={faCode} color="white" size="lg" />}
                title="Software Development"
                description="we specialize in creating software that drives innovation and efficiency. Our team of expert developers works closely with you to design and build custom software solutions tailored to meet your specific business needs."
              />
              <Card
                icon={<FontAwesomeIcon icon={faCode} color="white" size="lg" />}
                title="Consultation Services"
                description="IT consultation services that align with your specific requirements. Whether you're looking for software development, web applications, phone apps, or expert IT advice, our team has the expertise to provide tailored solutions that drive your business forward"
              />
            </Info2>
          </Content>
        </Container>
      </Section>

     
    </>
  );
}

export default Middle;