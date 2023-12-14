import { useState, useEffect  } from "react";

const useFocus = (initialState = true) => {
  const [focused, setFocused] = useState(initialState);

  useEffect(() => {
    const handleFocus = () => {
      setFocused(true);
    };
    const handleBlur = () => {
      setFocused(false);
    };
    window.addEventListener("focus", handleFocus);
    window.addEventListener("blur", handleBlur);

    handleFocus();

    return () => {
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("blur", handleBlur);
    };
  }, []);

  return focused;
};

export default useFocus;