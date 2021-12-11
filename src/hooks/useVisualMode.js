import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);

  const transition = function (newMode) {
    return setMode(newMode);
  };

  const back = function () {};

  return { mode, transition };
}
