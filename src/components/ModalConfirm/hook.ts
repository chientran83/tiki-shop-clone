export type ReceivedProps = Record<string, any>;

const useModalConfirm = (props: ReceivedProps) => {

  return { ...props };
};

export type Props = ReturnType<typeof useModalConfirm>;
export default useModalConfirm;
