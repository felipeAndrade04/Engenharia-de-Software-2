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
import Trophy from "../../../../assets/trophy.png";

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
  const isTied = user1.pontuation === user2.pontuation;

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
          Parabéns!!
          <br />
          {isTied ? "Partida empatada" : "Você ganhou"}
        </Text>

        <HStack spacing="32px">
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
                  src={Trophy}
                  maxW="96px"
                  maxH="96px"
                  position="absolute"
                  bottom="-24px"
                  right="-24px"
                />
              )}
            </Stack>

            <Text fontSize="24px" fontWeight="500" textAlign="center">
              {winner.name}
            </Text>
          </Stack>

          {isTied && (
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
                <Image src={user2.image} w="172px" h="172px" />
              </Stack>

              <Text fontSize="24px" fontWeight="500" textAlign="center">
                {user2.name}
              </Text>
            </Stack>
          )}
        </HStack>

        <Stack marginTop="48px">
          <Text fontSize="24px" textAlign="center">
            Pontuação:{" "}
            <Text fontWeight="600" display="inline">
              {winner.pontuation}
            </Text>
          </Text>
          <Text fontSize="24px" textAlign="center">
            Duração:{" "}
            <Text fontWeight="600" display="inline">
              {duration}
            </Text>
          </Text>
        </Stack>

        <HStack spacing="32px" marginTop="24px">
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
