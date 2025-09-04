// src/components/WorkGate.jsx
import Splash from "./Splash.jsx";

export default function WorkGate({ open, onDone, name = "TINA", duration = 5600 }) {
  if (!open) return null;
  // Splash already fills the screen; we just pass the timing and callback
  return (
    <Splash
      name={name}
      autoDuration={duration}
      showOncePerSession={false}
      onDone={onDone}
    />
  );
}
