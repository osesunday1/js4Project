import React, { useState } from "react";
import ProjectList from "../components/Projects/ProjectList";
import SearchBar from "../components/Projects/SearchBar";

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <SearchBar query={searchQuery} onChange={setSearchQuery} />
      <ProjectList searchQuery={searchQuery} />
    </>
  );
};

export default Projects;