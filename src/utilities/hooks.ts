import { useEffect, useState } from "react";

export const useDebounce = (value: string | null, timer: number) => {
  const [valueDebounce, setValueDebounce] = useState(value);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setValueDebounce(value);
    }, timer);
    return () => {
      clearTimeout(timeOut);
    };
  }, [value]);
  return valueDebounce;
};
