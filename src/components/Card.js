import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, link }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box
      bgColor="white" // Set background color to white
      borderRadius="lg" // Apply rounded corners
      color="black"
    >
      <VStack>
          <Image
            src={imageSrc}
            borderTopRadius="lg"
            borderBottomRadius={0}
            height="350px"
            width="100%"
            objectFit="cover"
          />
        <VStack align="Start" spacing={4} padding={4} paddingRight={12}>
          <Heading size="md">{title}</Heading>
          <Text size="md">{description}</Text>
          <a href={link} target="_blank">
            <HStack>
              <Text fontWeight="bold">See more</Text>
              <FontAwesomeIcon icon={faArrowRight} size="1x" />
            </HStack>
          </a>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Card;
