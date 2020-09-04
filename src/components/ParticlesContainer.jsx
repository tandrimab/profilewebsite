import React from "react";
import Particles from "react-particles-js";

function ParticlesContainer() {
    return (
        <div id="particles-div">
            <Particles 
                params={{
                    particles: {
						color: {
							value: "#6C757D"
						},
						line_linked: {
							color: {
								value: "#6C757D"
							}
						},
						number: {
							value: 120
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
                    backgroundColor: '#212529'
                }}
            />
        </div>
    );
}

export default ParticlesContainer;