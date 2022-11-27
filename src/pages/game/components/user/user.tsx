import { Image, ScaleFade, Stack, Text } from "@chakra-ui/react";

interface UserType {
  selected: boolean;
  name: string;
  pontuation: number;
  image: string;
}

export const User = ({ selected, name, pontuation, image }: UserType) => {
  return (
    <Stack
      width="184px"
      height="270px"
      borderRadius="8px"
      background="white"
      padding="32px"
      alignItems="center"
      spacing="16px"
      borderWidth="2px"
      borderColor={selected ? "brand.600" : "white"}
      position="relative"
      transition="border-color 0.6s"
    >
      <Stack
        padding="4px"
        borderRadius="full"
        borderWidth="2px"
        borderColor="brand.100"
      >
        <Image src={image} w="64px" h="64px" />
      </Stack>

      <Text fontSize="18px" fontWeight="400" color="brand.800">
        {name}
      </Text>

      <Text
        fontSize="80px"
        fontWeight="700"
        color="brand.100"
        lineHeight="70px"
      >
        {pontuation}
      </Text>

      <Stack position="absolute" bottom={"-20px"}>
        <ScaleFade initialScale={0.9} in={selected}>
          <Stack
            paddingX="16px"
            paddingY="8px"
            borderRadius="full"
            bg="brand.600"
          >
            <Text fontSize="12px" color="white" fontWeight="400">
              Sua vez!
            </Text>
          </Stack>
        </ScaleFade>
      </Stack>
    </Stack>
  );
};
