import React from "react";
import {
  ProjectsLink,
  Wrapper,
  ListWrapper,
  HeadLine,
  List,
  ListItem,
  BackLink,
} from "./index.style";
const Skills = () => {
  return (
    <Wrapper>
      <HeadLine>Web Development:</HeadLine>
      <ListWrapper>
        <List>
          <ListItem>JavaScript</ListItem>
          <ListItem>ReactJS</ListItem>
          <ListItem>NodeJS</ListItem>
          <ListItem>HTML/CSS/SASS</ListItem>
          <ListItem>ExpressJS</ListItem>
        </List>
        <List>
          <ListItem>Python</ListItem>
          <ListItem>Flask</ListItem>
          <ListItem>PHP (Beginner)</ListItem>
          <ListItem>WordPress</ListItem>
          <ListItem>Styled-Components</ListItem>
        </List>
      </ListWrapper>

      <HeadLine>Headless CMS & SDKs:</HeadLine>
      <ListWrapper>
        <List>
          <ListItem>Headless WordPress</ListItem>
          <ListItem>Firebase SDK</ListItem>
          <ListItem>Contentful SDK</ListItem>
          <ListItem>Strapi</ListItem>
        </List>
      </ListWrapper>

      <HeadLine>Mobile Development:</HeadLine>
      <ListWrapper>
        <List>
          <ListItem>Flutter / Dart</ListItem>
          <ListItem>React Native (intermediate)</ListItem>
        </List>
      </ListWrapper>
      <HeadLine>Photo Editing & Prototyping:</HeadLine>
      <ListWrapper>
        <List>
          <ListItem>Adobe Photoshop</ListItem>
          <ListItem>Gimp</ListItem>
          <ListItem>Adone xD</ListItem>
        </List>
        <List>
          <ListItem>Figma</ListItem>
          <ListItem>InkScape</ListItem>
        </List>
      </ListWrapper>

      <ProjectsLink to="/projects">Press Here to Conquer Projects</ProjectsLink>
      <BackLink to="/bio">Go Back</BackLink>
    </Wrapper>
  );
};

export default Skills;
