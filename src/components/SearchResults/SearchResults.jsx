/* eslint-disable react/prop-types */
import "./SearchResults.css";
import TrackList from "../Tracklist/Tracklist";


const SearchResults = ({searchResults}) => {

	

	return (
		<div className="results-container">
				<h2>Results</h2>
				<TrackList searchResults={searchResults}/>
		</div>
	);
};

export default SearchResults;