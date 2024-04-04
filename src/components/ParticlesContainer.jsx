import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function ParticlesContainer() {
    const maxViewPortLength = Math.max(window.innerHeight, window.innerWidth);
    const numOfParticles = maxViewPortLength / 32;

    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);


    return (
        <div id="particles-div">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    particles: {
                        color: {
                            value: "#ADB5BD"
                        },
                        links: {
                            color: "#ADB5BD",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            value: numOfParticles
                        },
                        size: {
                            value: 1
                        },
                    },
                    interactivity: {
                        events: {
                            onhover: {
                                enable: false,
                                mode: "repulse"
                            }
                        }
                    }
                }}
                style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'transparent'
                }}
            />
        </div>
    );
}

export default ParticlesContainer;