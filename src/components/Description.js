import React from "react";

const Description = ({ description }) => {
	if (!description) {
		return <div>Loading...</div>
	};

	return (
		<div className="ui segment">
			<h3>
			{description}
			</h3>
		</div>
	)
};

export default Description;