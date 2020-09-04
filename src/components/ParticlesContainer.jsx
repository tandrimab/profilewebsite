import React from "react";
import Particles from "react-particles-js";

function ParticlesContainer() {
    return (
        <div id="particles-div">
            <Particles 
                params={{
                    particles: {
						color: {
							value: "#000000"
						},
						line_linked: {
							color: {
								value: "#000000"
							}
						},
						number: {
							value: 120
						},
						size: {
							value: 3
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
            />
        </div>
    );
}

export default ParticlesContainer;