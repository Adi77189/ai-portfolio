import { useEffect, useState } from "react";

const SpotlightCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", updateMouse);

    return () => {
      window.removeEventListener("mousemove", updateMouse);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50"
      style={{
        background: `radial-gradient(
          400px at ${position.x}px ${position.y}px,
          rgba(0,255,255,0.12),
          transparent 80%
        )`,
      }}
    />
  );
};

export default SpotlightCursor;