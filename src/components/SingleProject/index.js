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
  ProjectLinkVideo,
} from "./index.style";
import { useParams } from "react-router-dom";
const projects = {
  purple: {
    title: "Purple",
    subtitle: "Buy, Sell and Hire - Mobile App",
    imgurl:
      "https://res.cloudinary.com/ahd3hd/image/upload/v1592164790/portfolio/_20200614_225359.png",
    desc: "Mobile App for sharing items for sale, or offer jobs or services.",
    techs: ["Flutter / Dart", "Firebase SDK"],
    github: "https://github.com/Zeus3hd/purpleapp",
    link:
      "https://res.cloudinary.com/ahd3hd/video/upload/v1592165508/portfolio/Screen-20200614-221240.mp4",
    linkid: "purple",
    type: "mobile",
  },
  myturkeyproperty: {
    title: "My turkey Property",
    subtitle: "Real Estate - Website",
    imgurl:
      "https://res.cloudinary.com/ahd3hd/image/upload/v1592165020/portfolio/myturkeyproperty-website.png",
    desc: "Website for a real estate agency for listing properies",
    techs: ["WordPress", "HTML", "SASS/CSS", "JavaScript", "JQuery"],
    github: "notyet",
    link: "https://myturkeyproperty.com/en/",
    type: "website",
  },
  myturkeypropertymobile: {
    title: "My turkey Property",
    subtitle: "Real Estate - Mobile App",
    imgurl:
      "https://res.cloudinary.com/ahd3hd/image/upload/v1592164809/portfolio/_20200614_225546.png",
    desc: "Mobile for a real estate agency for listing properies",
    techs: ["Flutter / Dart", "WordPress RestAPI"],
    github: "https://github.com/Zeus3hd/turkeyapp",
    link:
      "https://res.cloudinary.com/ahd3hd/video/upload/v1592165794/portfolio/Screen-20200614-221703.mp4",
    linkid: "turkey",

    type: "mobile",
  },
  elegantlady: {
    title: "Elegant Lady",
    subtitle: "Fashion Store - website",
    imgurl:
      "https://res.cloudinary.com/ahd3hd/image/upload/v1592165167/portfolio/Screenshot-20200614230551-1906x1016.png",
    desc: "Fashion Online Store for listing a fashion's store products",
    techs: [
      "ReactJS",
      "Contentful SDK",
      "NodeJS",
      "Cloudinary SDK",
      "JavaScript",
      "Sass/CSS",
    ],
    github: "https://github.com/Zeus3hd/fashfe",
    link: "https://fashfe-gjam0aovf.now.sh/",
    type: "website",
  },
  elegantladymobile: {
    title: "Elegant Lady",
    subtitle: "Fashion Store - Mobile App",
    imgurl:
      "https://res.cloudinary.com/ahd3hd/image/upload/v1592164825/portfolio/_20200614_225618.png",
    desc: "Fashion Online Store for listing a fashion's store products",
    techs: [
      "Flutter / Dart",
      "Contentful SDK",
      "NodeJS",
      "Cloudinary SDK",
      "JavaScript",
    ],
    github: "https://github.com/Zeus3hd/fashionflutter",
    link:
      "https://res.cloudinary.com/ahd3hd/video/upload/v1592165680/portfolio/Screen-20200614-223035.mp4",
    linkid: "elegant",

    type: "mobile",
  },
  portfolio: {
    title: "Portfolio",
    subtitle: "My Personal Portfolio - Website",
    imgurl:
      "https://res.cloudinary.com/ahd3hd/image/upload/v1592165025/portfolio/Screenshot-20200614230318-378x815.png",
    desc: "My personal portfolio mimicing the style of retro video games.",
    techs: ["ReactJS", "Styled-Components / SASS / CSS"],
    github: "https://github.com/Zeus3hd/portfolio",
    link: "https://ahdev.now.sh/",
    type: "website",
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
        <ProjectLink href={data.github} target="_blank">
          Code on Github
        </ProjectLink>
        {data.type === "website" ? (
          <ProjectLink href={data.link} target="_blank">
            View App/Website
          </ProjectLink>
        ) : (
          <ProjectLinkVideo to={`/video/${data.linkid}`}>
            View App/Website
          </ProjectLinkVideo>
        )}
      </ProjectLinkContainer>
      <BackLink to="/projects">Go Back</BackLink>
    </Wrapper>
  );
};

export default SingleProject;
