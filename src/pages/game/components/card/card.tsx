import { Image, Stack } from "@chakra-ui/react";
import BackSideCard from "../../../../assets/card.png";
import { CardType } from "../../cards";

interface CardProps {
  card: CardType;
  flipped: boolean;
  lockedBoard: boolean;
  onCardClick: (card: CardType) => void;
}

export const Card = ({
  card,
  flipped,
  lockedBoard,
  onCardClick,
}: CardProps) => {
  const { source, order } = card;

  const onClick = () => {
    if (lockedBoard || flipped) return;

    onCardClick(card);
  };

  return (
    <Stack
      width="100px"
      height="125px"
      borderRadius="8px"
      boxShadow="lg"
      margin="0px !important"
      order={order}
      onClick={onClick}
    >
      <Image src={flipped ? source : BackSideCard} height="full" width="full" />
    </Stack>
  );
};
