export type ReceivedProps = Record<string, any>;
const useFooter = (props: ReceivedProps) => {
  return { ...props };
};

export type Props = ReturnType<typeof useFooter>;
export default useFooter;
