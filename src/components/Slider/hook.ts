export type ReceivedProps = Record<string, any>;
const useSlider = (props: ReceivedProps) => {
  return { ...props };
};
export type Props = ReturnType<typeof useSlider>;
export default useSlider;
