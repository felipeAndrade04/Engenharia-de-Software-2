import {
  Button,
  HStack,
  Image,
  Modal,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import { User } from "../../../../store";
import { IoPlayOutline } from "react-icons/io5";
import Gold from "../../../../assets/gold-medal.png";
import Silver from "../../../../assets/silver-medal.png";

interface WinningUserModalProps {
  isOpen: boolean;
  user1: User;
  user2: User;
  duration: string;
  onClose: () => void;
  goToHome: () => void;
  restartGame: () => void;
}

export const WinningUserModal = ({
  isOpen,
  user1,
  user2,
  duration,
  onClose,
  goToHome,
  restartGame,
}: WinningUserModalProps) => {
  const winner = user1.pontuation >= user2.pontuation ? user1 : user2;
  const loser = user1.pontuation < user2.pontuation ? user1 : user2;
  const isTied = user1.pontuation === user2.pontuation;
  const singlePlayer = !user2.name;

  const finalMessage = () => {
    if (singlePlayer) {
      return "Parabéns!! Você ganhou";
    }

    if (isTied) {
      return "Parabéns!! Partida empatada";
    }

    return `${winner.name} ganhou!!!`;
  };

  const pontuationText = () => {
    let title1 = "";
    let title2 = "";
    let value1 = "";
    let value2 = "";

    if (singlePlayer) {
      title1 = "Pontuação";
      value1 = winner.pontuation.toString();
      title2 = "Tempo";
      value2 = duration;
    }

    if (isTied) {
      title1 = "Pontuação";
      value1 = winner.pontuation.toString();
    }

    if (!isTied && !singlePlayer) {
      title1 = "Primeiro lugar";
      value1 = `${winner.name} (${winner.pontuation}pts)`;
      title2 = "Segundo lugar";
      value2 = `${loser.name} (${loser.pontuation}pts)`;
    }

    return (
      <Stack marginTop="48px">
        <Text fontSize="24px" textAlign="center">
          {title1}{" "}
          <Text fontWeight="600" display="inline">
            {value1}
          </Text>
        </Text>
        {title2 && value2 ? (
          <Text fontSize="24px" textAlign="center">
            {title2}:{" "}
            <Text fontWeight="600" display="inline">
              {value2}
            </Text>
          </Text>
        ) : null}
      </Stack>
    );
  };

  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      size="5xl"
    >
      <ModalOverlay />
      <ModalContent
        padding="48px"
        bg="brand.800"
        borderRadius="16px"
        alignItems="center"
      >
        <Text
          fontSize="40px"
          fontWeight="600"
          textAlign="center"
          marginBottom="38px"
        >
          {finalMessage()}
        </Text>

        <HStack spacing="120px">
          <Stack>
            <Stack
              position="relative"
              rounded="full"
              padding="4px"
              borderRadius="full"
              borderWidth="3px"
              borderColor="brand.100"
              marginBottom="16px"
            >
              <Image src={winner.image} w="172px" h="172px" />
              {!isTied && (
                <Image
                  src={Gold}
                  maxW="96px"
                  maxH="96px"
                  position="absolute"
                  bottom="-24px"
                  right="-24px"
                />
              )}
            </Stack>

            {isTied && (
              <Text fontSize="24px" fontWeight="500" textAlign="center">
                {winner.name}
              </Text>
            )}
          </Stack>

          {user2 && !singlePlayer && (
            <Stack>
              <Stack
                position="relative"
                rounded="full"
                padding="4px"
                borderRadius="full"
                borderWidth="3px"
                borderColor="brand.100"
                marginBottom="16px"
              >
                <Image
                  src={loser.image}
                  w={isTied ? "172px" : "132px"}
                  h={isTied ? "172px" : "132px"}
                />
                {!isTied && (
                  <Image
                    src={Silver}
                    maxW="96px"
                    maxH="96px"
                    position="absolute"
                    bottom="-24px"
                    right="-24px"
                  />
                )}
              </Stack>

              {isTied && (
                <Text fontSize="24px" fontWeight="500" textAlign="center">
                  {loser.name}
                </Text>
              )}
            </Stack>
          )}
        </HStack>

        {pontuationText()}

        <HStack spacing="32px" marginTop="68px">
          <Stack
            padding="4px"
            borderRadius="full"
            borderWidth="2px"
            borderColor="brand.100"
            width="264px"
          >
            <Button
              onClick={restartGame}
              paddingX="32px"
              color="brand.600"
              borderRadius="full"
              fontWeight="400"
              leftIcon={<IoPlayOutline size="16px" />}
            >
              Jogar novamente
            </Button>
          </Stack>
          <Stack
            padding="4px"
            borderRadius="full"
            borderWidth="2px"
            borderColor="brand.100"
            width="264px"
          >
            <Button
              onClick={goToHome}
              paddingX="32px"
              color="white"
              background="brand.600"
              borderWidth="2px"
              borderColor="white"
              borderRadius="full"
              fontWeight="400"
              _hover={{ opacity: 0.7 }}
            >
              Ir para início
            </Button>
          </Stack>
        </HStack>
      </ModalContent>
    </Modal>
  );
};
