import { Image, Stack } from "@chakra-ui/react";
import CardImg from "../../../../assets/card.png";

export const Card = () => {
  return (
    <Stack
      width="100px"
      height="125px"
      borderRadius="8px"
      boxShadow="lg"
      margin="0px !important"
    >
      <Image src={CardImg} height="full" width="full" />
    </Stack>
  );
};
