import { useState, useEffect } from 'react';

const useMediaQuery = (query) => {
  const getMatches = (query) => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    } else {
      return false;
    }
  };

  const [matches, setMatches] = useState(getMatches(query));

  const handleResizeChange = () => {
    setMatches(getMatches(query));
  };

  useEffect(() => {
    const matchedMedia = window.matchMedia(query);
    handleResizeChange();

    if (matchedMedia.addEventListener) {
      matchedMedia.addEventListener("change", handleResizeChange);
    }

    return () => {
      if (matchedMedia.removeEventListener) {
        matchedMedia.removeEventListener("change", handleResizeChange);
      }
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;