// Use state
import { useState } from 'react';

// Function to toggle (on/of)
export function useToggle() {
  // Declare the state with initial value false
  const [toggle, setToggle] = useState(false);

  // Function to on/of the toggle
  function handleToggle() {
    setToggle((toggle) => !toggle);
  }

  // Return the toggle for use
  return { toggle, handleToggle };
}
