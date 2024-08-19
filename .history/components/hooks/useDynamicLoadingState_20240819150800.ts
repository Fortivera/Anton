/* eslint-disable prettier/prettier */
"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const useDynamicLoadingState = () => {
    const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>(
        {}
    );
    const router = useRouter();

    useEffect(() => {
        // Reset the loading state when the component mounts (or remounts on navigation)
        setLoadingStates({});
    }, [router]);

    const startLoading = (id: string) => {
        setLoadingStates((prev) => ({ ...prev, [id]: true }));
    };

    return { loadingStates, startLoading };
};

export default useDynamicLoadingState;
