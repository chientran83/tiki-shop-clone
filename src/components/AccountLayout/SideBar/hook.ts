import { useSelector } from "react-redux";

import { userSelector } from "../../../context/auth/selector";

export type ReceivedProps = Record<string, any>;
const useSideBar = (props: ReceivedProps) => {
  const user = useSelector(userSelector);
  return {
    ...props,
    user,
  };
};

export type Props = ReturnType<typeof useSideBar>;
export default useSideBar;
