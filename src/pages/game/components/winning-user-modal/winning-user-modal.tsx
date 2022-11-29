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
  user: User;
  onClose: () => void;
}

export const WinningUserModal = ({
  isOpen,
  user,
  onClose,
}: WinningUserModalProps) => {
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
          Você ganhou
        </Text>

        <Stack
          position="relative"
          rounded="full"
          padding="4px"
          borderRadius="full"
          borderWidth="3px"
          borderColor="brand.100"
          marginBottom="16px"
        >
          <Image src={user.image} maxW="172px" maxH="172px" />
          <Image
            src={Trophy}
            maxW="96px"
            maxH="96px"
            position="absolute"
            bottom="-24px"
            right="-24px"
          />
        </Stack>

        <Text fontSize="24px" fontWeight="500">
          {user.name}
        </Text>

        <Stack marginTop="48px">
          <Text fontSize="24px" textAlign="center">
            Pontuação:{" "}
            <Text fontWeight="600" display="inline">
              {user.pontuation}
            </Text>
          </Text>
          <Text fontSize="24px" textAlign="center">
            Duração:{" "}
            <Text fontWeight="600" display="inline">
              2:40
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
              paddingX="32px"
              color="white"
              background="brand.600"
              borderWidth="2px"
              borderColor="white"
              borderRadius="full"
              fontWeight="400"
            >
              Ir para início
            </Button>
          </Stack>
        </HStack>
      </ModalContent>
    </Modal>
  );
};
