import { Image, keyframes, Stack } from "@chakra-ui/react";
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

  const flip = keyframes`
  from { transform: rotateY(180deg); }
  to { transform: rotateY(0deg); }
`;
  const animation = `${flip} 0.5s`;

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
      position="relative"
    >
      {flipped && (
        <Image
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateY(0deg)",
          }}
          transform={"revert-layer"}
          animation={animation}
          src={source}
          height="full"
          width="full"
          position="absolute"
          top={0}
          left={0}
        />
      )}
      {!flipped && (
        <Image
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateY(0deg)",
          }}
          animation={animation}
          src={BackSideCard}
          height="full"
          width="full"
          position="absolute"
          top={0}
          left={0}
        />
      )}
    </Stack>
  );
};
