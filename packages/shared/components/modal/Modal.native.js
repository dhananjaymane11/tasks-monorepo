import { Modal, Portal, Text } from "react-native-paper";

import { ModalContent, ChildrenWrapper } from "./Modal.style";

const ModalComp = ({ showModal, setShowModal, title, children }) => {
  return (
    <Modal visible={showModal} onDismiss={() => setShowModal(false)}>
      <ModalContent>
        <Text>{title}</Text>
        <ChildrenWrapper>{children}</ChildrenWrapper>
      </ModalContent>
    </Modal>
  );
};

export default ModalComp;
