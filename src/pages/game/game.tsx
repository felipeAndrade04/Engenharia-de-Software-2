import { HStack, Stack } from "@chakra-ui/react";
import { Card, Header, User } from "./components";

export const Game = () => {
  const cards = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <Stack width="100vw" height="100vh" bg="whiteAlpha.50">
      <Header />
      <HStack
        paddingX="68px"
        paddingY="24px"
        spacing="24px"
        alignItems="flex-start"
      >
        <Stack spacing="32px">
          <User selected={true} name="usar423" pontuation={10} />
          <User selected={false} name="eueueu" pontuation={0} />
        </Stack>

        <HStack flexWrap="wrap" gap="16px">
          {cards.map((card) => (
            <Card />
          ))}
        </HStack>
      </HStack>
    </Stack>
  );
};
