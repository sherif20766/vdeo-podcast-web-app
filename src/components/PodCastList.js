import React from "react";
import PodCastItem from "./PodCastItem";

const PodCastList = ({ onItemClick, podcasts }) => {
	if (!podcasts) {
		return <div>Loading...</div>;
	}

	const renderedList = podcasts.map(item => {
		return (
			<div key={item.title}>
				<PodCastItem item={item} onItemClick={onItemClick} />
			</div>
		);
	});

	return (
		<div
			className="ui relaxed divided list"
			style={{ overflowX: "auto", maxHeight: "500px" }}
		>
			{renderedList}
		</div>
	);
};

export default PodCastList;
