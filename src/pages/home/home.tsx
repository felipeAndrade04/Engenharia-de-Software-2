import React from "react";
import { Button, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Carousel from "../../assets/carousel.png";
import Logo from "../../assets/logo.png";
import { FiUsers, FiUser } from "react-icons/fi";
import { GameMode, useGameStore } from "../../store";

export const Home = () => {
  const navigate = useNavigate();
  const updateGameMode = useGameStore((state) => state.updateGameMode);

  const startGame = (difficulty: GameMode) => {
    updateGameMode(difficulty);
    navigate("/iniciar-partida");
  };

  return (
    <Stack
      width="100vw"
      height="100vh"
      bgImage={Carousel}
      bgPosition="right"
      bgRepeat="no-repeat"
      bgSize="112vh"
    >
      <Stack marginTop="40px" marginLeft="96px" maxW="498px">
        <Image src={Logo} alt="logo" width="176px" marginBottom="72px" />

        <Text fontWeight="700" fontSize="48px">
          O jogo da memória nunca foi tão divertido!!
        </Text>
        <Text fontWeight="400" fontSize="18px" paddingTop="16px">
          Multiplique sua diversão, memorizando nossas cartinhas da copa
        </Text>

        <HStack spacing="32px" paddingTop="84px">
          <Stack
            padding="4px"
            borderRadius="full"
            borderWidth="2px"
            borderColor="brand.100"
          >
            <Button
              onClick={() => startGame("SinglePlayer")}
              paddingX="32px"
              color="brand.600"
              borderRadius="full"
              fontWeight="400"
              leftIcon={<FiUser size="16px" />}
            >
              Sigle player
            </Button>
          </Stack>
          <Text>ou</Text>
          <Stack
            padding="4px"
            borderRadius="full"
            borderWidth="2px"
            borderColor="brand.100"
          >
            <Button
              onClick={() => startGame("MultiPlayer")}
              paddingX="32px"
              color="brand.600"
              borderRadius="full"
              fontWeight="400"
              leftIcon={<FiUsers size="16px" />}
            >
              Multiplayer
            </Button>
          </Stack>
        </HStack>
      </Stack>
    </Stack>
  );
};
