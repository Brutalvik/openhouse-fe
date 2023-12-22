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
  Divider,
} from "@chakra-ui/react";
import { useAppDispatch } from "app/hooks";
import { setModalOpen } from "app/reducers/actions";
import { useActionsSelector } from "app/selectors/actions";
import { useCommunitiesSelector } from "app/selectors/communities";
import fallbackImage from "assets/noImage.png";

const Moreinfo: FC = () => {
  const dispatch = useAppDispatch();
  const { isModalOpen, activeTab } = useActionsSelector();
  const { moreInfo }: any = useCommunitiesSelector();

  const tab = activeTab === 1;
  const handleModalClose = () => dispatch(setModalOpen(false));

  return (
    <Modal isOpen={isModalOpen as boolean} onClose={handleModalClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{tab ? moreInfo?.name : "Demo Modal"}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image
            src={tab ? moreInfo?.imgUrl : fallbackImage}
            alt="image"
            w="100%"
            h="200px"
            objectFit="cover"
          />
          This is a modal demo with a backdrop. Selected property community
          details are displayed.
          <Text color="blue.600" fontSize="2xl">
            {tab ? moreInfo?.group : "Group Name"}
          </Text>
        </ModalBody>
        <Divider />
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
