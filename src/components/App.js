import React from "react";
import Title from "./Title";
import Description from "./Description";
import PodCastList from "./PodCastList";
import VideoDetail from "./VideoDetail";
import RSSParser from "rss-parser";


class App extends React.Component {

	state = {
		podcasts: [],
		selectedPodCast: null,
	}

	onItemClick = item => {
		this.setState({
			selectedPodCast: item,
		});
	}

	componentDidMount() {

		let currentComponent = this;
		const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
 		
		let parser = new RSSParser();
		parser.parseURL(CORS_PROXY + 'http://rss.cnn.com/services/podcasting/studentnews/rss', function(err, feed) {
		  if (err) throw err;
		  console.log(feed);

		  currentComponent.setState({ 
			podcasts: feed, 
			selectedPodCast: feed.items[0]
	   	  });
		})
	}	

	render() {
		return (
			<div 
			  className="ui container segment" 
			  style={{ maxWidth: "1280px", maxHeight: "720px" }}
			>

				<Title title={this.state.podcasts.title}/>
				<Description description={this.state.podcasts.description}/>
				
				<main className="ui grid">
				  <div className="ui row">

					<div className="eight wide column">
						<PodCastList
							onItemClick={this.onItemClick} 
							podcasts={this.state.podcasts.items}
						/>
					</div>

					<div className="eight wide column">
						<VideoDetail selectedPodCast={this.state.selectedPodCast} />
					</div>

				  </div>
				</main>
			</div>
		)
	}
}

export default App;