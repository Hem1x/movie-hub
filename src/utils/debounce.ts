import React, { useState, useEffect } from 'react';

export const useDebounce = (value: string, delay = 500) => {
  const [debounced, setDebounce] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => setDebounce(value), delay);
    return () => clearTimeout(handler);
  });

  return debounced;
};
