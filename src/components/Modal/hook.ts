export type ReceivedProps = Record<string, any>;

const useModal = (props: ReceivedProps) => {
  return { ...props };
};

export type Props = ReturnType<typeof useModal>;
export default useModal;
