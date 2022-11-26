import { HStack, Stack } from "@chakra-ui/react";
import { useGameStore } from "../../store";
import { CardType } from "./cards";
import { Card, Header, User } from "./components";

export const Game = () => {
  const gameMode = useGameStore((state) => state.gameMode);
  const user1 = useGameStore((state) => state.user1);
  const user2 = useGameStore((state) => state.user2);
  const currentUser = useGameStore((state) => state.currentUser);
  const firstCard = useGameStore((state) => state.firstCard);
  const secondCard = useGameStore((state) => state.secondCard);
  const cards = useGameStore((state) => state.cards);
  const updateCurrentUser = useGameStore((state) => state.updateCurrentUser);
  const updateFirstCard = useGameStore((state) => state.updateFirstCard);
  const updateSecondCard = useGameStore((state) => state.updateSecondCard);
  const updateCards = useGameStore((state) => state.updateCards);
  const updateUser1Pontuation = useGameStore(
    (state) => state.updateUser1Pontuation
  );
  const updateUser2Pontuation = useGameStore(
    (state) => state.updateUser2Pontuation
  );

  const onCardClick = (card: CardType) => {
    if (!firstCard.id) {
      updateFirstCard(card);
      return;
    }

    updateSecondCard(card);

    checkForMatch(card);
  };

  const checkForMatch = (card: CardType) => {
    if (firstCard.source === card.source) {
      markCardsAsChecked();

      currentUser === "1"
        ? updateUser1Pontuation(user1.pontuation + 1)
        : updateUser2Pontuation(user2.pontuation + 1);
    }

    unFlipCards(card);
  };

  const markCardsAsChecked = () => {
    const updatedCards = cards.map((card) => ({
      ...card,
      matched: card.source === firstCard.source || card.matched,
    }));

    updateCards(updatedCards);
  };

  const unFlipCards = (card: CardType) => {
    setTimeout(() => {
      if (gameMode === "MultiPlayer" && firstCard.source !== card.source) {
        const newCurrentUser = currentUser === "1" ? "2" : "1";
        updateCurrentUser(newCurrentUser);
      }

      updateFirstCard({ id: "", matched: false, source: "" });
      updateSecondCard({ id: "", matched: false, source: "" });
    }, 1500);
  };

  return (
    <Stack width="100vw" height="100vh" bg="whiteAlpha.50">
      <Header />
      <HStack
        padding="14px"
        spacing="24px"
        alignItems="flex-start"
        maxW="1092px"
        marginX="auto !important"
      >
        <Stack spacing="24px">
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

        <HStack flexWrap="wrap" gap="8px">
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              flipped={
                firstCard.id === card.id ||
                secondCard.id === card.id ||
                card.matched
              }
              lockedBoard={!!firstCard.id && !!secondCard.id}
              onCardClick={onCardClick}
            />
          ))}
        </HStack>
      </HStack>
    </Stack>
  );
};
