export type ReceivedProps = Record<string, any>;

const useLoginLayout = (props : ReceivedProps) => {
  return { ...props };
};

export type Props = ReturnType<typeof useLoginLayout>;

export default useLoginLayout;
