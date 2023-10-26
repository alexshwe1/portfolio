import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";
import bargainImage from '../images/bargain.png'
import motoImage from '../images/moto.png'

const projects = [
  {
    title: "Bargain",
    description:
      "An iOS app helping you discover unbeatable deals at your favorite bars in Madison, Wisconsin",
    imageSrc: bargainImage,
    link: "https://apps.apple.com/us/app/bargain-sip-and-save/id6464521870?uo=2",
  },
  {
    title: "Moto Bikes",
    description:
      "An e-commerce site offering lightweight and affordable electric bikes, headquartered in San Francisco, California",
    imageSrc: motoImage,
    link: "https://www.ridewithmoto.com/",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      px={8}
      py={20}
      alignItems="flex-start"
      spacing={8}
      id="projects-section"
    >
      <Heading as="h1">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            link={project.link}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
