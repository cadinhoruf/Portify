import { useEffect, useRef, MutableRefObject } from "react";

export interface IUseKeyDown {
  keyName: string;
  callback?: () => void;
}

export const useKeyDown = (
  keyName: string,
  callback?: () => void
): MutableRefObject<IUseKeyDown> => {
  const ref = useRef<IUseKeyDown>({ keyName, callback });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === keyName) {
        if (callback) callback();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return ref;
};