import React from "react";

const Title = ({ title }) => {
	if (!title) {
		return <div>Loading...</div>;
	}

	return (
		<div className="ui segment">
			<h1 style={{ color: "#E33906" }}>{title}</h1>
		</div>
	);
};

export default Title;
