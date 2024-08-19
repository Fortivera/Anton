/* eslint-disable prettier/prettier */
'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const useDynamicLoadingState = () => {
    const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});
    const router = useRouter();

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'visible') {
                setLoadingStates({});
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    const startLoading = (id: string) => {
        setLoadingStates((prev) => ({ ...prev, [id]: true }));
    };

    return { loadingStates, startLoading };
};

export default useDynamicLoadingState;
