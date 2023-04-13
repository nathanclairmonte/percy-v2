import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particles = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        enable: false,
                        color: "#ffffff",
                        distance: 150,
                        opacity: 0.03,
                        width: 1,
                    },
                    collisions: {
                        enable: false,
                    },
                    move: {
                        direction: "right",
                        speed: 0.05,
                    },
                    number: {
                        value: 160,
                        density: {
                            enable: true,
                            area: 1500,
                        },
                    },
                    opacity: {
                        value: 0.5,
                        anim: {
                            enable: true,
                            speed: 0.5,
                            opacity_min: 0.05,
                        },
                    },
                    shape: {
                        type: "circle",
                        // type: "star",
                    },
                    size: {
                        value: { min: 1, max: 1.82 },
                    },
                },
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                        },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default Particles;
