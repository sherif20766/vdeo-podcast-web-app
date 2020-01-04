import React, { useState, useEffect } from "react";
import Title from "./Title";
import Description from "./Description";
import PodCastList from "./PodCastList";
import VideoDetail from "./VideoDetail";
import RSSParser from "rss-parser";

const App = () => {
	const [podcasts, setPodcasts] = useState([]);
	const [selectedPodCast, setSelectedPodCast] = useState(null);

	const onItemClick = item => setSelectedPodCast(item);

	useEffect(() => {
		const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

		let parser = new RSSParser();
		parser.parseURL(
			CORS_PROXY +
				"http://rss.cnn.com/services/podcasting/studentnews/rss",
			function(err, feed) {
				if (err) throw err;
				console.log(feed);

				setPodcasts(feed);
				setSelectedPodCast(feed.items[0]);
			}
		);
	}, []);

	return (
		<div
			className="ui container segment"
			style={{ maxWidth: "1280px", maxHeight: "720px" }}
		>
			<Title title={podcasts.title} />
			<Description description={podcasts.description} />

			<main className="ui grid">
				<div className="ui row">
					<div className="eight wide column">
						<PodCastList
							onItemClick={onItemClick}
							podcasts={podcasts.items}
						/>
					</div>

					<div className="eight wide column">
						<VideoDetail selectedPodCast={selectedPodCast} />
					</div>
				</div>
			</main>
		</div>
	);
};

export default App;
