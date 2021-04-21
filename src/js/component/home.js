import React, { useState } from "react";
import { Light } from "./light";

//create your first component
export function Home() {
	const colors = ["red", "yellow", "green"];
	const [glow, setGlow] = useState("red");

	return (
		<div className="mt-5 d-flex flex-column justify-content-center align-items-center">
			<h1>Traffic Light with React</h1>
			<div className="mt-3 trafficLight d-flex flex-column justify-content-around align-items-center rounded">
				{colors.map((color, index) => {
					return (
						<Light
							key={index}
							color={color}
							glow={glow}
							setGlow={setGlow}
						/>
					);
				})}
			</div>
		</div>
	);
}
