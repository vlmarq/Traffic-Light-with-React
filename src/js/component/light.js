import React, { useState } from "react";
import PropTypes from "prop-types";

export function Light(props) {
	const [isGlow, setIsGlow] = useState(false);

	const controlGlow = () => {
		if (isGlow) {
			setIsGlow(false);
		} else {
			setIsGlow(true);
		}
	};

	return (
		<button
			className={
				isGlow ? "light rounded-circle glow" : "light rounded-circle"
			}
			style={{ backgroundColor: props.color }}
			onClick={() => controlGlow()}
		/>
	);
}

Light.propTypes = {
	color: PropTypes.string
};

export default Light;
