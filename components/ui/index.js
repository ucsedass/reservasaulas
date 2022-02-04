import React from "react";
import {
  Box,
  Text,
  Heading,
  HStack,
  Badge,
  Center,
  GridItem,
} from "@chakra-ui/layout";
import { FaCaretRight } from "react-icons/fa";
export const TituloPantalla = ({ titulo }) => {
  return (
    <>
      <Box textAlign="center" bgColor="blue.400">
        <Text fontSize="3xl" color="white">
          {titulo}
        </Text>
      </Box>
    </>
  );
};

export const Pasos = ({ texto }) => {
  return (
    <Heading>
      <Text fontSize="1hl">
        <HStack>
          <FaCaretRight />
          <Badge bgColor="orange.300">PASO {texto}</Badge>
        </HStack>
      </Text>
    </Heading>
  );
};

export const CuadroPasos = (props) => {
  return (
    <GridItem w="100%" bg="white" borderColor="blue.500" pl={3} pr={3} pb={2}>
      {props.children}
    </GridItem>
  );
};
