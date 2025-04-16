import styled, { keyframes} from 'styled-components';




const Wrapper = styled.div`
  margin-inline: auto;
  position: relative;
  height: 100px;
  margin-top: 1rem;
  margin-bottom: 5rem;
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1) 20%,
    rgba(0, 0, 0, 1) 80%,
    rgba(0, 0, 0, 0)
  );
`;

const scrollLeft = keyframes`
  to {
    left: -200px; 
  }
`;

const Item = styled.div`
  width: 200px;
  height: 100px;
  border-radius: 6px;
  position: absolute;
  left: max(calc(200px * 8), 100%);
  animation-name: ${scrollLeft};
  animation-duration: 30s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  img {
    width: 100%;
    object-fit: contain;
  }
`;

const Item1 = styled(Item)`
  animation-delay: calc(30s / 8 * (8 - 1) * -1);
`;

const Item2 = styled(Item)`
  animation-delay: calc(30s / 8 * (8 - 2) * -1);
`;

const Item3 = styled(Item)`
  animation-delay: calc(30s / 8 * (8 - 3) * -1);
`;

const Item4 = styled(Item)`
  animation-delay: calc(30s / 8 * (8 - 4) * -1);
`;

const Item5 = styled(Item)`
  animation-delay: calc(30s / 8 * (8 - 5) * -1);
`;

const Item6 = styled(Item)`
  animation-delay: calc(30s / 8 * (8 - 6) * -1);
`;

const Item7 = styled(Item)`
  animation-delay: calc(30s / 8 * (8 - 7) * -1);
`;

const Item8 = styled(Item)`
  animation-delay: calc(30s / 8 * (8 - 8) * -1);
`;

const InfiniteSlide = () => {
  return (
    <>
    
      <Wrapper>
        
        <Item1><img src="./pLanguages/a16.png" alt="t" /></Item1>
        <Item2><img src="./pLanguages/a15.png" alt="t8" /></Item2>
        <Item3><img src="./pLanguages/a13.png" alt="t2" /></Item3>
        <Item4><img src="./pLanguages/a12.png" alt="t3" /></Item4>
        <Item5><img src="./pLanguages/a10.png" alt="t4" /></Item5>
        <Item6><img src="./pLanguages/a9.png" alt="t5" /></Item6>
        <Item7><img src="./pLanguages/a4.png" alt="t6" /></Item7>
        <Item8><img src="./pLanguages/a3.png" alt="t7" /></Item8>
      </Wrapper>
    </>
  );
};

export default InfiniteSlide;