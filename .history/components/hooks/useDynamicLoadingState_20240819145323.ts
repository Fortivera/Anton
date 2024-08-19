/* eslint-disable prettier/prettier */
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

    const startLoading = (id: string) => {
        setLoadingStates((prev) => ({ ...prev, [id]: true }));

    };

    return { loadingStates, startLoading };
};

export default useDynamicLoadingState;
