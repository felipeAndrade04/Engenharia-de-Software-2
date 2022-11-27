import {
  Grid,
  GridItem,
  Image,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";
import { userImages } from "../users";

interface ChangeUserImageModalProps {
  isOpen: boolean;
  currentImage: string;
  onClose: () => void;
  onChangeImage: (image: string) => void;
}

export const ChangeUserImageModal = ({
  isOpen,
  currentImage,
  onChangeImage,
  onClose,
}: ChangeUserImageModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="3xl">
      <ModalOverlay />
      <ModalContent padding="32px" bg="brand.800" borderRadius="16px">
        <ModalHeader>Selecione a imagem que desejar</ModalHeader>
        <ModalCloseButton />
        <Grid templateColumns={"repeat(4, 1fr)"} gap={4}>
          {userImages.map((image) => (
            <GridItem>
              <Stack
                rounded="full"
                padding="8px"
                borderRadius="full"
                borderWidth="3px"
                borderColor={currentImage === image ? "brand.100" : "brand.800"}
                maxW="calc(128px + 4 * 8)"
                maxH="calc(128px + 4 * 8)"
                onClick={() => onChangeImage(image)}
              >
                <Image src={image} />
              </Stack>
            </GridItem>
          ))}
        </Grid>
      </ModalContent>
    </Modal>
  );
};
