import React, { FC } from "react";
import {
  Button,
  Modal as ModalAndt,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import useTable, { Props } from "./hook";
import { ReceivedProps } from "./hook";

const ModalLayout: FC<Props> = ({ isOpen, onClose, children }) => {
  return (
    <ModalAndt isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
        </ModalFooter>
      </ModalContent>
    </ModalAndt>
  );
};

const Modal: FC<ReceivedProps> = (props) => {
  return <ModalLayout {...useTable(props)} />;
};
export default Modal;
