import { Button, HStack, Image, Stack } from "@chakra-ui/react";
import Logo from "../../assets/logo.png";
import { Select } from "../../components";
import { IoPlayOutline } from "react-icons/io5";
import { User } from "./components";
import { useNavigate } from "react-router-dom";

export const StartGame = () => {
  const navigate = useNavigate();

  const navigateToGame = () => {
    navigate("/partida");
  };

  const gameType = "Multiplayer";

  const data = [
    {
      title: "Fácil",
      value: "easy",
    },
    {
      title: "Médio",
      value: "medium",
    },
    {
      title: "Difícil",
      value: "hard",
    },
  ];

  return (
    <Stack height="100vh">
      <Stack
        width="1080px"
        minHeight="596px"
        borderRadius="24px"
        margin="auto"
        bg="brand.800"
        paddingX="72px"
        paddingY="48px"
      >
        <Image src={Logo} width="224px" marginX="auto" marginBottom="90px" />

        <HStack alignItems="flex-start" justifyContent="space-between">
          <Stack spacing="72px">
            <User />
            {gameType === "Multiplayer" && <User />}
          </Stack>

          <Stack>
            <Select
              name="difficulty"
              data={data}
              label="Dificuldade"
              width="264px"
              marginBottom="48px"
            />

            <Stack
              padding="4px"
              borderRadius="full"
              borderWidth="2px"
              borderColor="brand.100"
            >
              <Button
                onClick={navigateToGame}
                paddingX="32px"
                color="brand.600"
                borderRadius="full"
                fontWeight="400"
                leftIcon={<IoPlayOutline size="16px" />}
              >
                Iniciar jogo
              </Button>
            </Stack>
          </Stack>
        </HStack>
      </Stack>
    </Stack>
  );
};
