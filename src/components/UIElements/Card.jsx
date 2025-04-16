import styled from 'styled-components';

const CardContainer = styled.div`
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: 250px;
  max-width: ${(props) => props.width || '300px'}; 
  border: solid 2px var(--purple0);
  color: var(--purple0);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  transition: all 0.3s ease-in-out;

  h3 {
        color: var(--purple0) !important;
    }

    p {
      color: var(--purple0) !important;
    }
 
  &:hover {
    background-color: #6a48d7;
    transform: translateY(-5%);

    h3 {
        color: var(--white0) !important;
    }

    p {
      color: var(--white0) !important;
    }

    .icon-container {
      background-color: transparent;
      display: none;
    }
  }

  @media (max-width: 1090px) {
    background: var(--white0);
    opacity: 0.9;
  }

  @media (max-width: 550px) {
    max-width: 80%;
  }
`;

const IconContainer = styled.div`
  background-color: #6a48d7;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 0 auto 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  color: var(--black0);
`;

const CardTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: var(--purple0);
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
`;

const CardDescription = styled.p`
  text-align: justify;
  font-size: 14px;
  color: var(--purple0);
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
`;

const Card = ({ icon, title, description }) => {
  return (
    <CardContainer>
      <IconContainer className="icon-container">
        {icon}
      </IconContainer>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
};

export default Card;