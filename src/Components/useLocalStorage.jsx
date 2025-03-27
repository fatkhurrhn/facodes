import React, { useState, useEffect } from "react";

const prefix = "codepen-clone-";

function useLocalStorage(key, initialValue) {
  const prefixKey = prefix + key;

  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixKey);

    if (jsonValue !== null) return JSON.parse(jsonValue);

    return typeof initialValue === "function" ? initialValue() : initialValue;
  });

  useEffect(() => {
    if (value !== undefined) {
      localStorage.setItem(prefixKey, JSON.stringify(value));
    }
  }, [prefixKey, value]);

  return [value, setValue];
}

export default useLocalStorage;
