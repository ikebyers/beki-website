import React, { useEffect } from "react";
import SongListItem from "../components/SongListItem";
import {songs} from "../data/featuredSongs.json";

const Home = () => {
	return (
		<div>
			<img src="" alt="Beki text logo" />
				{songs.forEach((songObj) => 
                    <SongListItem year={songObj.year} songName={songObj.songName} />
                )}
		</div>
	);
};

export default Home;
