import { useState } from "react";
import Splash from "../components/Splash.jsx";
import Work from "../sections/Work.jsx";

export default function WorkPage() {
  const [showGrid, setShowGrid] = useState(false);

  if (!showGrid) {
    return (
      <Splash
        name="TINA"
        autoDuration={5600}          // ~5.6s before showing projects
        showOncePerSession={false}   // always play when you open /work
        onDone={() => setShowGrid(true)}
      />
    );
  }

  return <Work />;
}
