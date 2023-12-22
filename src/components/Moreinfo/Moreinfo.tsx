import { FC, lazy, Suspense } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { useAppDispatch } from "app/hooks";
import { setModalOpen } from "app/reducers/actions";
import { useActionsSelector } from "app/selectors/actions";

const Moreinfo: FC = () => {
  const dispatch = useAppDispatch();
  const { isModalOpen } = useActionsSelector();

  const handleModalClose = () => dispatch(setModalOpen(false));

  return (
    <Suspense>
      <Modal isOpen={isModalOpen as boolean} onClose={handleModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            corrupti porro minus excepturi vitae, doloremque dolore corporis
            nostrum possimus magni.
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleModalClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Suspense>
  );
};

export default Moreinfo;
