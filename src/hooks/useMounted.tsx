import { useEffect, useState } from "react";

/**
 * A custom React hook that returns a boolean value indicating whether the component is mounted or not.
 *
 * @returns {boolean} A boolean value indicating whether the component is mounted or not.
 */
export function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);

  return mounted;
}
