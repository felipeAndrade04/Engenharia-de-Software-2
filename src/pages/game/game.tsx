import { HStack, Stack } from "@chakra-ui/react";
import { useGameStore } from "../../store";
import { Card, Header, User } from "./components";

const cards = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

export const Game = () => {
  const gameMode = useGameStore((state) => state.gameMode);
  const user1 = useGameStore((state) => state.user1);
  const user2 = useGameStore((state) => state.user2);
  const currentUser = useGameStore((state) => state.currentUser);

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
          <User
            selected={user1.id === currentUser}
            name={user1.name}
            pontuation={user1.pontuation}
          />
          {gameMode === "MultiPlayer" && (
            <User
              selected={user2.id === currentUser}
              name={user2.name}
              pontuation={user2.pontuation}
            />
          )}
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
