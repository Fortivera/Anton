/* eslint-disable prettier/prettier */
'use client';
import { useState, useEffect } from 'react';

const useDynamicLoadingState = () => {
    const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});

    // Reset loading state when the page visibility changes (e.g., when the user navigates back)
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

    // Handle Safari-specific caching issues by resetting state when the page unloads
    useEffect(() => {
        const handleUnload = () => {
            setLoadingStates({});
        };

        window.addEventListener('beforeunload', handleUnload);
        window.addEventListener('pagehide', handleUnload);
        window.addEventListener('unload', handleUnload); // Adding unload event for additional safety

        return () => {
            window.removeEventListener('beforeunload', handleUnload);
            window.removeEventListener('pagehide', handleUnload);
            window.removeEventListener('unload', handleUnload);
        };
    }, []);

    const startLoading = (id: string) => {
        setLoadingStates((prev) => ({ ...prev, [id]: true }));
    };

    return { loadingStates, startLoading };
};

export default useDynamicLoadingState;