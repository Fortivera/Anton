// hooks/useDynamicLoadingState.ts
import { useState, useRef, useEffect } from "react";

const useDynamicLoadingState = () => {
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>(
    {}
  );
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const startLoading = (id: string) => {
    setLoadingStates((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      if (isMounted.current) {
        setLoadingStates((prev) => ({ ...prev, [id]: false }));
      }
    }, 2000);
  };

  return { loadingStates, startLoading };
};

export default useDynamicLoadingState;
