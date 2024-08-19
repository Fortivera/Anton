"use client";
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

    const startLoading = async (
        id: string,
        asyncOperation: () => Promise<void>
    ) => {
        setLoadingStates((prev) => ({ ...prev, [id]: true }));

        try {
            await asyncOperation(); // Wait for the async operation to complete
        } finally {
            if (isMounted.current) {
                setLoadingStates((prev) => ({ ...prev, [id]: false }));
            }
        }
    };

    return { loadingStates, startLoading };
};

export default useDynamicLoadingState;
