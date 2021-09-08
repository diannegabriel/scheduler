import { useState } from "react";

// useVisualMode() sets the transition for all Appointment components
export default function useVisualMode(inMode) {
  const [mode, setMode] = useState(inMode);
  const [history, setHistory] = useState([inMode]);

  // transition() helps the app move on to the next component with ease
  const transition = (newMode, replace = false) => {
    setMode(newMode);
    replace
      ? setHistory([...history.slice(0, -1), newMode])
      : setHistory((prev) => [...prev, newMode]);
  };

  // back() shows the previous component, mainly used when user clicks cancel or close
  const back = () => {
    if (!(mode === inMode)) {
      const lastIndex = history.slice(0, -1).length - 1;
      setHistory([...history.slice(0, -1)]);
      setMode(history[lastIndex]);
    }
  };
  return {
    mode, // The current component
    transition, // The next component
    back, // The previous component
  };
}
