import React, { useState } from "react";
import { Light } from "./light";

//create your first component
export function Home() {
	return (
		<div className="mt-5 d-flex flex-column justify-content-center align-items-center">
			<h1>Traffic Light with React</h1>
			<div className="mt-3 trafficLight d-flex flex-column justify-content-around align-items-center rounded">
				<Light color="red" />
				<Light color="yellow" />
				<Light color="green" />
			</div>
		</div>
	);
}
