import { useEffect } from "react";

const useSingleEffect = (effect) => {
  useEffect(effect, []);
};

export default useSingleEffect;