import React from "react";

const VideoDetail = ({ selectedPodCast }) => {
	if(!selectedPodCast) { return <div>Loading...</div>}
	const podScr = selectedPodCast.link;

	return (
		<div>
			<div className="ui embed">
				<iframe title="video player" src={podScr} type="video/mp4" />
			</div>
			<div className="ui segment">
				<h4 className="ui header">{selectedPodCast.title}</h4>
				<p>{selectedPodCast.contentSnippet}</p>
			</div>
		</div>
	);
}

export default VideoDetail;