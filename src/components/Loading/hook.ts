export type ReceivedProps = Record<string, any>;
const useLoading = (props: ReceivedProps) => {
  return { ...props };
};

export type Props = ReturnType<typeof useLoading>;
export default useLoading;
