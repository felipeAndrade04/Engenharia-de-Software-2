import { HStack, Image, Stack } from "@chakra-ui/react";
import UserImg from "../../../assets/user.png";
import { Input } from "../../../components";

export const User = () => {
  return (
    <HStack spacing="40px" alignItems="flex-start">
      <Stack
        position="relative"
        rounded="full"
        padding="8px"
        borderRadius="full"
        borderWidth="3px"
        borderColor="brand.100"
      >
        <Image src={UserImg} minW="164px" minH="164px" />
      </Stack>

      <Input
        name="name"
        label="nome do usuário"
        width="228px"
        placeholder="Nome"
      />
    </HStack>
  );
};
