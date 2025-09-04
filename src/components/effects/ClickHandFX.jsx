import { useEffect, useState } from "react";

export default function ClickHandFX(){
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    const onClick = (e) => {
      const id = Math.random().toString(36).slice(2);
      setSpots((s)=>[...s, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(()=> setSpots((s)=> s.filter(p=>p.id!==id)), 700);
    };
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[80]">
      {spots.map(p=>(
        <svg key={p.id}
             className="absolute hand-pop"
             style={{ left: p.x, top: p.y }}
             viewBox="0 0 48 48" width="48" height="48" aria-hidden="true">
          {/* neon halo */}
          <circle cx="24" cy="24" r="22" fill="none" stroke="#22ff66" strokeOpacity=".6"/>
          {/* hand pointer */}
          <path d="M24 10c-1.1 0-2 .9-2 2v10.2l-1.5-1.2a2 2 0 1 0-2.5 3l4 3.1V36a2 2 0 0 0 4 0v-6.3l4.7 3.6a2 2 0 1 0 2.4-3.2l-7-5.4V12a2 2 0 0 0-2-2Z"
                fill="#22ff66"/>
        </svg>
      ))}
    </div>
  );
}
