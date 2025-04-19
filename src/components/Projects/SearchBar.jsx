import React from "react";
import styled from "styled-components";


const Grid = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction:row;
  flex-wrap:wrap;
  padding: 2rem;
  margin:auto;
  justify-content: center;
  
  margin: 10rem auto 2rem auto;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  max-width: 500px;
  padding: 0.75rem 1rem;
  display: block;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: var(--purple0, #6a0dad);
    box-shadow: 0 0 5px rgba(106, 13, 173, 0.2);
  }
`;

const SearchBar = ({ query, onChange }) => {
  return (
    <Grid>
    <Heading>
        Our Projects
    </Heading>
    <Input
      type="text"
      placeholder="Search by project title or tech stack..."
      value={query}
      onChange={(e) => onChange(e.target.value)}
    />
    </Grid>
  );
};

export default SearchBar;