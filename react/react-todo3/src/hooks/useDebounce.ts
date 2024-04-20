import { useEffect, useState } from "react";

interface useDebounce {
  value: string;
  delay?: number;
}

export const useDebounce = ({ value, delay = 300 }: useDebounce) => {
  const [debounceVal, setDebounceVal] = useState(value);
  console.log("de", debounceVal);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceVal(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounceVal;
};
