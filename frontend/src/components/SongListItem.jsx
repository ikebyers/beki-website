import React, { useEffect } from "react";

const SongListItem = (props) => {
	const { songName, year } = props;
    
    useEffect(()=>{
        console.log("SongListItem recieved song:", songName);
        console.log("SongListItem recieved year:", year)
    },[songName, year]);
	return (
		<>
			<div className="container">
				<div className="row">
					{/* Enter bullet icon in first column */}
					<div className="col"></div>
					<div className="col text-end">
						{songName} ({year})
					</div>
				</div>
			</div>
		</>
	);
};

export default SongListItem;
