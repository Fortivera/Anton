/* eslint-disable prettier/prettier */
'use client';
import { useState, useEffect } from 'react';

const useDynamicLoadingState = () => {
    const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});


    // Reset loading state when the page visibility changes
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

    // Handle Safari-specific caching issues
    useEffect(() => {
        const handleUnload = () => {
            setLoadingStates({});
        };

        window.addEventListener('beforeunload', handleUnload);
        window.addEventListener('pagehide', handleUnload);

        return () => {
            window.removeEventListener('beforeunload', handleUnload);
            window.removeEventListener('pagehide', handleUnload);
        };
    }, []);

    const startLoading = (id: string) => {
        setLoadingStates((prev) => ({ ...prev, [id]: true }));
    };

    return { loadingStates, startLoading };
};

export default useDynamicLoadingState;
