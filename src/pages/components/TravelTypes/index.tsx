import { Flex } from "@chakra-ui/react";
import TravelTypesItem from "./TravelTypesItem";

export default function TravelTypes() {

  return (
    <Flex
      w="100%"
      justifyContent="space-around"
      px="16"
      
      mb="16"
      flexWrap="wrap"

    >
      <TravelTypesItem image='/img/cocktail.svg' text="Vida noturna" />
      <TravelTypesItem image='/img/surf.svg' text="Praia" />
      <TravelTypesItem image='/img/building.svg' text="Moderno" />
      <TravelTypesItem image='/img/museum.svg' text="Clássico" />
      <TravelTypesItem image='img//earth.svg' text="e mais..." />
    </Flex>
  );
}
