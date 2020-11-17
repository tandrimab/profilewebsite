import React from "react";
import Particles from "react-particles-js";

function ParticlesContainer() {
    const maxViewPortLength = Math.max(window.innerHeight, window.innerWidth);
    const numOfParticles = maxViewPortLength / 16;
    return (
        <div id="particles-div">
            <Particles 
                params={{
                    particles: {
						color: {
							value: "#ADB5BD"
						},
						line_linked: {
							color: {
								value: "#ADB5BD"
							}
						},
						number: {
							value: numOfParticles
						},
						size: {
							value: 2
						},
                        move: {
                            speed: 1
                        }
					},
                    interactivity: {
                        events: {
                            onhover: {
                                enable: true,
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