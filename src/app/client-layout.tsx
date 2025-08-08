"use client";
import React, { useEffect, useState } from "react";
import RotationSuggestion from "./components/RotationSuggestion";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    document.body.classList.add('page-loaded');
    const timeout = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      {loading && (
        <div className="global-spinner-overlay">
          <div className="global-spinner"></div>
        </div>
      )}
      <div style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.6s cubic-bezier(0.4,0,0.2,1)' }}>
        {children}
        <RotationSuggestion />
      </div>
    </>
  );
}
