import React from "react";
import {
  Wrapper,
  Green,
  ProjectImg,
  White,
  TechsList,
  ListItem,
  BackLink,
  ProjectLink,
  ProjectLinkContainer,
} from "./index.style";
import { useParams } from "react-router-dom";
const projects = {
  purple: {
    title: "Purple",
    subtitle: "Buy, Sell and Hire - Mobile App",
    imgurl: "https://picsum.photos/600/800",
    desc: "Mobile App for sharing items for sale, or offer jobs or services.",
    techs: ["Flutter / Dart", "Firebase SDK"],
  },
  myturkeyproperty: {
    title: "My turkey Property",
    subtitle: "Real Estate - Website",
    imgurl: "https://picsum.photos/600/800",
    desc: "Website for a real estate agency for listing properies",
    techs: ["WordPress", "HTML", "SASS/CSS", "JavaScript", "JQuery"],
  },
  myturkeypropertymobile: {
    title: "My turkey Property",
    subtitle: "Real Estate - Mobile App",
    imgurl: "https://picsum.photos/600/800",
    desc: "Mobile for a real estate agency for listing properies",
    techs: ["Flutter / Dart", "WordPress RestAPI"],
  },
  elegantlady: {
    title: "Elegant Lady",
    subtitle: "Fashion Store - website",
    imgurl: "https://picsum.photos/600/800",
    desc: "Fashion Online Store for listing a fashion's store products",
    techs: [
      "ReactJS",
      "Contentful SDK",
      "NodeJS",
      "Cloudinary SDK",
      "JavaScript",
      "Sass/CSS",
    ],
  },
  elegantladymobile: {
    title: "Elegant Lady",
    subtitle: "Fashion Store - Mobile App",
    imgurl: "https://picsum.photos/600/800",
    desc: "Fashion Online Store for listing a fashion's store products",
    techs: [
      "Flutter / Dart",
      "Contentful SDK",
      "NodeJS",
      "Cloudinary SDK",
      "JavaScript",
    ],
  },
  portfolio: {
    title: "Portfolio",
    subtitle: "My Personal Portfolio - Website",
    imgurl: "https://picsum.photos/600/800",
    desc: "My personal portfolio mimicing the style of retro video games.",
    techs: ["ReactJS", "Styled-Components / SASS / CSS"],
  },
  portfoliomobile: {
    title: "Portfolio",
    subtitle: "My Personal Portfolio - Mobile App",
    imgurl: "https://picsum.photos/600/800",
    desc: "My personal portfolio mimicing the style of retro video games.",
    techs: ["Flutter / Dart"],
  },
};
const SingleProject = () => {
  let { id } = useParams();
  let data = projects[id];
  return (
    <Wrapper>
      <Green>{data.title}</Green>
      <Green>{data.subtitle}</Green>
      <ProjectImg bg={data.imgurl} />
      <White>{data.desc}</White>
      <White>Techs Used:</White>
      <TechsList>
        {data.techs.map((tech) => (
          <ListItem key={tech}>{tech}</ListItem>
        ))}
      </TechsList>
      <ProjectLinkContainer>
        <ProjectLink>Code on Github</ProjectLink>
        <ProjectLink>View App/Website</ProjectLink>
      </ProjectLinkContainer>
      <BackLink to="/projects">Go Back</BackLink>
    </Wrapper>
  );
};

export default SingleProject;
