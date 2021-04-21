import React from "react";
import PropTypes from "prop-types";

export function Light(props) {
	return (
		<button
			className={"light rounded-circle"}
			style={{
				backgroundColor:
					props.color === props.glow ? props.color : "grey"
			}}
			onClick={() => props.setGlow(props.color)}
		/>
	);
}

Light.propTypes = {
	color: PropTypes.string,
	glow: PropTypes.string,
	setGlow: PropTypes.func
};

export default Light;
