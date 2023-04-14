import { FC } from "react";
import { HStack, Spinner } from "@chakra-ui/react";
import useLoading, { Props, ReceivedProps } from "./hook";

const LoadingLayout: FC<Props> = () => {
  return (
    <HStack
      top="0"
      left="0"
      w="100vw"
      h="100vh"
      bg="#80808061"
      position="fixed"
      align="center"
      justify="center"
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </HStack>
  );
};
const Loading: FC<ReceivedProps> = (props) => {
  return <LoadingLayout {...useLoading(props)}/>;
};
export default Loading;
