import React from "react";
import {
  BackLink,
  Wrapper,
  ProjectLink,
  ProjectTitle,
  ProjectDesc,
} from "./index.style";
const Projects = () => {
  return (
    <Wrapper>
      <ProjectLink to="/projects/purple">
        <ProjectTitle>Purple</ProjectTitle>
        <ProjectDesc>Sell, Buy and Hire - Mobile App</ProjectDesc>
      </ProjectLink>
      <ProjectLink to="/projects/myturkeyproperty">
        <ProjectTitle>My Turkey Property</ProjectTitle>
        <ProjectDesc>Real Estate - Website</ProjectDesc>
      </ProjectLink>
      <ProjectLink to="/projects/myturkeypropertymobile">
        <ProjectTitle>My Turkey Property</ProjectTitle>
        <ProjectDesc>Real Estate - Mobile App</ProjectDesc>
      </ProjectLink>
      <ProjectLink to="/projects/elegantlady">
        <ProjectTitle>Elegant Lady</ProjectTitle>
        <ProjectDesc>Online Fashion Store - website</ProjectDesc>
      </ProjectLink>
      <ProjectLink to="/projects/elegantladymobile">
        <ProjectTitle>Elegant Lady</ProjectTitle>
        <ProjectDesc>Online Fashion Store - Mobile App</ProjectDesc>
      </ProjectLink>
      <ProjectLink to="/projects/portfolio">
        <ProjectTitle>Portfolio</ProjectTitle>
        <ProjectDesc>My Personal Portfolio - Website</ProjectDesc>
      </ProjectLink>

      <BackLink to="/bio">Go Back</BackLink>
    </Wrapper>
  );
};

export default Projects;
