import { FC } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";
import { useAppDispatch } from "app/hooks";
import { setModalOpen } from "app/reducers/actions";
import { useActionsSelector } from "app/selectors/actions";
import { useCommunitiesSelector } from "app/selectors/communities";

const Moreinfo: FC = () => {
  const dispatch = useAppDispatch();
  const { isModalOpen } = useActionsSelector();
  const { moreInfo }: any = useCommunitiesSelector();

  const handleModalClose = () => dispatch(setModalOpen(false));
  return (
    <Modal isOpen={isModalOpen as boolean} onClose={handleModalClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{moreInfo?.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image
            src={moreInfo?.imgUrl}
            alt="image"
            w="100%"
            h="200px"
            objectFit="cover"
          />
          This is a modal demo with a backdrop. Selected proeprty community
          details are displayed.
          <Text color="blue.600" fontSize="2xl">
            {moreInfo?.group}
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleModalClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Moreinfo;
