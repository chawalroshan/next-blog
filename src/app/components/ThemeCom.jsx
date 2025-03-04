'use client';
import { useTheme } from "next-themes";
import { useEffect, useState } from 'react';

const ThemeCom = ({ children }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // If mounted is false, return null to avoid rendering mismatched HTML
  if (!mounted) return null;

  return (
    <div className={`theme ${theme}`}>
      <div className="bg-white text-gray-200 dark:text-gray-200 dark:bg-[rgb(16,23,42)] min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default ThemeCom;
