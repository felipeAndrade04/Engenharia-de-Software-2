import { Button, HStack, Image, Stack } from "@chakra-ui/react";
import Logo from "../../assets/logo.png";
import { Select } from "../../components";
import { IoPlayOutline } from "react-icons/io5";
import { ChangeUserImageModal, User } from "./components";
import { useNavigate } from "react-router-dom";
import { Difficulty, useGameStore } from "../../store";
import * as Yup from "yup";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

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

type FormData = {
  user1: string;
  user2?: string;
  difficulty: Difficulty;
};

export const StartGame = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState("1");
  const navigate = useNavigate();
  const gameMode = useGameStore((state) => state.gameMode);
  const user1 = useGameStore((state) => state.user1);
  const user2 = useGameStore((state) => state.user2);
  const difficulty = useGameStore((state) => state.difficulty);
  const updateDifficulty = useGameStore((state) => state.updateDifficulty);
  const updateUser1Name = useGameStore((state) => state.updateUser1Name);
  const updateUser2Name = useGameStore((state) => state.updateUser2Name);
  const updateUser1Image = useGameStore((state) => state.updateUser1Image);
  const updateUser2Image = useGameStore((state) => state.updateUser2Image);

  const currentImage = selectedUser === "1" ? user1.image : user2.image;

  const schema = Yup.object({
    user1: Yup.string().required("Nome obrigatório"),
    user2:
      gameMode === "MultiPlayer"
        ? Yup.string().required("Nome obrigatório")
        : Yup.string().notRequired(),
  });

  const methods = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      user1: user1.name,
      user2: user2.name,
      difficulty,
    },
  });

  const onSubmit: SubmitHandler<FormData> = (values) => {
    updateDifficulty(values.difficulty);
    updateUser1Name(values.user1);
    updateUser2Name(values.user2 || "");
    navigate("/partida");
  };

  const onOpenModal = (user: string) => {
    setSelectedUser(user);
    setModalIsVisible(true);
  };

  const onChangeImage = (image: string) => {
    selectedUser === "1" ? updateUser1Image(image) : updateUser2Image(image);
  };

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
            <FormProvider {...methods}>
              <User
                name="user1"
                image={user1.image}
                openModal={() => onOpenModal("1")}
              />
              {gameMode === "MultiPlayer" && (
                <User
                  name="user2"
                  image={user2.image}
                  openModal={() => onOpenModal("2")}
                />
              )}
            </FormProvider>
          </Stack>

          <Stack>
            <Select
              {...methods.register("difficulty")}
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
                onClick={methods.handleSubmit(onSubmit)}
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
      <ChangeUserImageModal
        currentImage={currentImage}
        isOpen={modalIsVisible}
        onClose={() => setModalIsVisible(false)}
        onChangeImage={onChangeImage}
      />
    </Stack>
  );
};
