'use client';

import { useEffect, useState } from 'react';
import styles from './RotationSuggestion.module.css';

export default function RotationSuggestion() {
    const [showSuggestion, setShowSuggestion] = useState(false);

    useEffect(() => {
        const checkOrientation = () => {
            // Only show on mobile devices
            const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            if (isMobile && window.innerHeight > window.innerWidth) {
                setShowSuggestion(true);
            } else {
                setShowSuggestion(false);
            }
        };

        checkOrientation();
        window.addEventListener('resize', checkOrientation);
        window.addEventListener('orientationchange', checkOrientation);

        return () => {
            window.removeEventListener('resize', checkOrientation);
            window.removeEventListener('orientationchange', checkOrientation);
        };
    }, []);

    if (!showSuggestion) return null;

    return (
        <div className={styles.rotationSuggestion}>
            <div className={styles.content}>
                <span className={styles.icon}>📱</span>
                <p>Rotate your device for a better experience</p>
            </div>
        </div>
    );
}
