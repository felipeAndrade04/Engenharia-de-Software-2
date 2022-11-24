import { HStack, Image, Stack } from "@chakra-ui/react";
import { FieldError, useFormContext } from "react-hook-form";
import UserImg from "../../../assets/user.png";
import { Input } from "../../../components";

type UserProps = {
  name: string;
};

export const User = ({ name }: UserProps) => {
  const { register, formState } = useFormContext();

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
        label="nome do usuário"
        width="228px"
        placeholder="Nome"
        error={formState.errors[name] as FieldError}
        {...register(name)}
      />
    </HStack>
  );
};
