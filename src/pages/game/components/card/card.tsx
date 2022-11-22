import { Image, Stack } from "@chakra-ui/react";
import CardImg from "../../../../assets/card.png";

export const Card = () => {
  return (
    <Stack
      width="128px"
      height="160px"
      borderRadius="8px"
      boxShadow="lg"
      margin="0px !important"
    >
      <Image src={CardImg} height="full" width="full" />
    </Stack>
  );
};
