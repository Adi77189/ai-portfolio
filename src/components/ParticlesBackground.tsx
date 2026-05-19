import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -10,
        },

        background: {
          color: "transparent",
        },

        fpsLimit: 120,

        particles: {
          number: {
            value: 70,
          },

          color: {
            value: ["#00F5D4", "#7C3AED"],
          },

          links: {
            enable: true,
            distance: 140,
            color: "#00F5D4",
            opacity: 0.15,
            width: 1,
          },

          move: {
            enable: true,
            speed: 1,
          },

          opacity: {
            value: 0.5,
          },

          size: {
            value: { min: 1, max: 3 },
          },
        },

        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;