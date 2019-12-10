import React from "react";

const PodCastItem = ({ onItemClick, item }) => {

	return (
		<div 
		  className="ui segment item list-item" onClick={()=> onItemClick(item)}
		  style={{ cursor: "pointer"}}
		 >
			<h3>{item.title}</h3>
			<p>{item.contentSnippet}</p>
		</div>
	);
}

export default PodCastItem;