import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #f3f4f6;
  padding: 4rem 1.5rem;
  color: #1f2937;
  margin-top: 10%;
`;

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto 5rem auto;
  background: #ffffff;
  border-radius: 1rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  border-bottom: 4px solid #c084fc; /* Tailwind's primary-100 equivalent */
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const SubHeading = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1.125rem;
  color: #4b5563;
  line-height: 1.75;
`;

const TeamGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  margin-top: 2rem;
`;

const TeamCard = styled.div`
  background: #ffffff;
  padding: 1rem;
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 15px 20px -5px rgba(0, 0, 0, 0.15);
  }
`;

const Avatar = styled.img`
  border-radius: 9999px;
  width: 196px;
  height: 196px;
  object-fit: cover;
  margin: 0 auto 1rem auto;
  border: 4px solid #c084fc;
`;

const Name = styled.h3`
  font-size: 1rem;
  font-weight: 700;
`;

const Role = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
`;

const About = () => {
  const teamMembers = [
    {
      name: "Jaseem Ismail",
      role: "Full Stack Developer",
      img: "https://i.postimg.cc/YSwD26ZY/qqweewq.jpg",
    },
    {
      name: "Oseyenbhin Sunday",
      role: "Software Developer",
      img: "https://i.postimg.cc/BbZjcVys/ose.jpg",
    },
  ];

  return (
    <>
      <Wrapper>
        {/* Intro */}
        <Section>
          <Heading>About GRAHOUGLO</Heading>
          <Paragraph>
          We are a team of passionate developers, designers, and strategists committed to building technology solutions that empower businesses and enrich lives.
          </Paragraph>
        </Section>

        {/* Mission */}
        <Section>
          <SubHeading>🌍 Our Mission</SubHeading>
          <Paragraph>
          To deliver cutting-edge digital solutions that solve real-world problems, drive growth, and create meaningful impact.
          </Paragraph>
        </Section>

        {/* Team */}
        <Section>
          <SubHeading style={{ textAlign: "center" }}>Meet the Team</SubHeading>
          <TeamGrid>
            {teamMembers.map((member, index) => (
              <TeamCard key={index}>
                <Avatar src={member.img} alt={member.name} />
                <Name>{member.name}</Name>
                <Role>{member.role}</Role>
              </TeamCard>
            ))}
          </TeamGrid>
        </Section>
      </Wrapper>

      {/* Footer */}
    </>
  );
};

export default About;