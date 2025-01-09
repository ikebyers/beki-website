import React, { useEffect } from "react";

const SongListItem = (props) => {
	const { songName, year } = props;
	return (
		<>
				<div className="row">
					{/* Enter bullet icon in first column */}
					<div className="col"></div>
					<div className="col text-end">
						{songName} ({year})
					</div>
				</div>
		</>
	);
};

export default SongListItem;
