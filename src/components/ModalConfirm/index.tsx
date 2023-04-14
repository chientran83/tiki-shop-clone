import React, { FC } from "react";
import {
  Button,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialog,
} from "@chakra-ui/react";

import useTable, { Props } from "./hook";
import { ReceivedProps } from "./hook";

const ModalConfirmLayout: FC<Props> = ({
  isOpen,
  onClose,
  cancelRef,
  handleConfirm,
  title,
  content,
}) => {
  return (
    <AlertDialog
      motionPreset="slideInBottom"
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <AlertDialogOverlay />

      <AlertDialogContent>
        <AlertDialogHeader>{title}</AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody>{content}</AlertDialogBody>
        <AlertDialogFooter>
          <Button ref={cancelRef} onClick={() => onClose()}>
            Hủy
          </Button>
          <Button
            colorScheme="red"
            ml={3}
            onClick={() => {
              handleConfirm();
              onClose();
            }}
          >
            Xác nhận
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

const ModalConfirm: FC<ReceivedProps> = (props) => {
  return <ModalConfirmLayout {...useTable(props)} />;
};
export default ModalConfirm;
