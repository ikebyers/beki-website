import React, { useEffect } from "react";
import SongListItem from "../components/SongListItem";
import { songs } from "../data/featuredSongs.json";

const Home = () => {
	return (
		<div>
			<img src="" alt="Beki text logo" />
			<div className="container">
				{songs.map((songObj, index) => {
					return (
						<SongListItem key={index} year={songObj.year} songName={songObj.songName} />
					);
				})}
			</div>
		</div>
	);
};

export default Home;
