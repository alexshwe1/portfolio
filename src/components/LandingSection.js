import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Alex!";
const bio1 = "A hard-working, quick-learning, and versatile software engineer";
const bio2 = "with relevant professional experience working with all aspects of the stack";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
    py={150}
  >
    <VStack spacing={16}>
      <VStack spacing={6}>
        <Avatar src={`https://drive.google.com/uc?export=view&id=1U5itewuUocphRQXhP_67D2aBS0-GFJvJ`} boxSize="200px"/>
        <Heading>{greeting}</Heading>
      </VStack>
      <VStack spacing={2}>
        <Heading size="md" >{bio1}</Heading>
        <Heading size="md" >{bio2}</Heading>
      </VStack>  
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
