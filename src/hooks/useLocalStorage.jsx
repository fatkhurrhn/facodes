import { useState, useEffect } from 'react';

const PREFIX = 'codepen-clone-';

const useLocalStorage = (key, initialValue) => {
  const prefixedKey = PREFIX + key;

  const [value, setValue] = useState(() => {
    if (typeof window === 'undefined') {
      return initialValue; // Handle SSR or non-browser environments
    }

    const jsonValue = localStorage.getItem(prefixedKey);
    if (jsonValue != null) {
      try {
        return JSON.parse(jsonValue);
      } catch (e) {
        console.error('Error parsing JSON from localStorage:', e);
        return initialValue; // Return initial value on parse error
      }
    }

    if (typeof initialValue === 'function') {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(prefixedKey, JSON.stringify(value));
    }
  }, [value, prefixedKey]);

  return [value, setValue];
};

export default useLocalStorage;