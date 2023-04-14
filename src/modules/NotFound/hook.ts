export type ReceivedProps = Record<string, any>;
const useNotFound = (props: ReceivedProps) => {
  return { ...props };
};

export type Props = ReturnType<typeof useNotFound>;
export default useNotFound;
