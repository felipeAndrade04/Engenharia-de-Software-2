import { Image, Stack } from "@chakra-ui/react";
import Logo from "../../../../assets/logo.png";

export const Header = () => {
  return (
    <Stack paddingX="68px" paddingY="14px" background="brand.600">
      <Image src={Logo} width="176px" />
    </Stack>
  );
};
