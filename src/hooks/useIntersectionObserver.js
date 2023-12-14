import { useEffect, useState } from "react";

/* eslint-disable react-hooks/exhaustive-deps */
const useIntersectionObserver = (
  elementRef,
  { threshold = 0, root = null, rootMargin = "0%", freezeOnceVisible = false },
) => {
  const [entry, setEntry] = useState(null);
  const frozen = entry?.isIntersecting && freezeOnceVisible;

  const handleEntry = ([entry]) => {
    setEntry(entry);
  };

  useEffect(() => {
    const node = elementRef?.current;
    const isBrowser = !!window.IntersectionObserver;

    if (!isBrowser || frozen || !node) {
      return;
    }

    const observerOptions = { threshold, root, rootMargin };

    const observer = new IntersectionObserver(handleEntry, observerOptions);
    observer.observe(node);

    return () => observer.disconnect();
  }, [
    elementRef?.current,
    JSON.stringify(threshold),
    root,
    rootMargin,
    frozen,
  ]);

  return entry;
};

export default useIntersectionObserver;