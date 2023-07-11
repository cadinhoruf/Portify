import { useEffect, useRef, RefObject } from "react";

interface IUseOutsideClick {
  callback?: () => void;
}

export const useOutsideClick = (options?: IUseOutsideClick): RefObject<HTMLDivElement> => {
  const { callback } = options || {};
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        if (callback) callback();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [callback]);

  return ref;
};