import { HStack, Image, Stack } from "@chakra-ui/react";
import { FieldError, useFormContext } from "react-hook-form";
import { Input } from "../../../components";
import { HiOutlinePencil } from "react-icons/hi";

type UserProps = {
  name: string;
  image: string;
  openModal: () => void;
};

export const User = ({ name, image, openModal }: UserProps) => {
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
        <Image src={image} maxW="164px" maxH="164px" />
        <Stack
          position="absolute"
          top="-6px"
          right="-6px"
          padding="4px"
          borderRadius="full"
          background="brand.600"
          cursor="pointer"
          _hover={{ filter: "brightness(0.8)" }}
          onClick={openModal}
        >
          <Stack
            borderWidth="2px"
            borderColor="white"
            borderRadius="full"
            padding="8px"
          >
            <HiOutlinePencil size="22px" />
          </Stack>
        </Stack>
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
