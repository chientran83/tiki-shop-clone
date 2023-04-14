export type ReceivedProps = Record<string, any>;
const useSpinner = (props: ReceivedProps) => {
  return { ...props };
};
export type Props = ReturnType<typeof useSpinner>;
export default useSpinner;
