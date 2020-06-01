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
      <ProjectLink to="/purple">
        <ProjectTitle>Purple</ProjectTitle>
        <ProjectDesc>Sell, Buy and Hire - Mobile App</ProjectDesc>
      </ProjectLink>
      <ProjectLink to="/myturkeyproperty">
        <ProjectTitle>My Turkey Property</ProjectTitle>
        <ProjectDesc>Real Estate - Website</ProjectDesc>
      </ProjectLink>
      <ProjectLink to="/myturkeyproperty">
        <ProjectTitle>My Turkey Property</ProjectTitle>
        <ProjectDesc>Real Estate - Mobile App</ProjectDesc>
      </ProjectLink>
      <ProjectLink to="/myturkeyproperty">
        <ProjectTitle>Elegant Lady</ProjectTitle>
        <ProjectDesc>Online Fashion Store - website</ProjectDesc>
      </ProjectLink>
      <ProjectLink to="/myturkeyproperty">
        <ProjectTitle>Elegant Lady</ProjectTitle>
        <ProjectDesc>Online Fashion Store - Mobile App</ProjectDesc>
      </ProjectLink>
      <ProjectLink to="/myturkeyproperty">
        <ProjectTitle>Portfolio</ProjectTitle>
        <ProjectDesc>My Personal Portfolio - Website</ProjectDesc>
      </ProjectLink>
      <ProjectLink to="/myturkeyproperty">
        <ProjectTitle>Portfolio</ProjectTitle>
        <ProjectDesc>My Personal Portfolio - Mobile App</ProjectDesc>
      </ProjectLink>
      <BackLink to="/bio">Go Back</BackLink>
    </Wrapper>
  );
};

export default Projects;
