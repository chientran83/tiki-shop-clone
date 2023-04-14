export type ReceivedProps = Record<string, any>;

const useDefaultLayout = (props : ReceivedProps) => {
  return { ...props };
};

export type Props = ReturnType<typeof useDefaultLayout>;

export default useDefaultLayout;
