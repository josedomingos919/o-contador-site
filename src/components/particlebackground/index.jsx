import "./style.css";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { MoveDirection, OutMode } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

// Need to install @tsparticles/react , @tsparticles/engine and @tsparticles/slim packages
// npm install @tsparticles/react @tsparticles/engine @tsparticles/slim

export default function ParticleBackground({ color = "black" }) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: { value: "transparent" }, // Transparent for overlay use
      },
      fullScreen: {
        enable: false,
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 100, duration: 0.4 },
        },
      },
      particles: {
        color: { value: color },
        links: {
          color: color,
          distance: 150,
          enable: true,
          opacity: 0.4,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: { default: OutMode.out },
          speed: 2,
        },
        number: {
          density: { enable: true, area: 800 },
          value: 60,
        },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 4 } },
      },
      detectRetina: true,
    }),
    []
  );

  const getId = useMemo(
    () => "tsparticles" + String(Math.random()).replace(".", "")
  );

  if (!init) return null;

  return (
    <Particles
      id={getId}
      options={options}
      className="particle container1"
      particlesLoaded={particlesLoaded}
    />
  );
}
