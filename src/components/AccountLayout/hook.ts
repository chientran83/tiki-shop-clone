export type ReceivedProps = Record<string, any>;

const useAccountLayout = (props : ReceivedProps) => {
  return { ...props };
};

export type Props = ReturnType<typeof useAccountLayout>;

export default useAccountLayout;
