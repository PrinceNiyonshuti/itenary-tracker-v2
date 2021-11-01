/** @format */

import React, { useState, useEffect } from "react";
import Itenaries from "../Components/Itenaries";

const Main = () => {
	const [itenaryData, setItenaryData] = useState(null);

	useEffect(() => {
		fetch(`http://localhost:8000/itenaryList`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setItenaryData(data);
			});
	}, []);

	// Remove Itenary
	const deleteItenary = (ItenaryId) => {
		const filteredItenaries = itenaryData.filter(
			(itenary) => itenary.id !== ItenaryId
		);
		setItenaryData(filteredItenaries);

		// const deleteItenerary = fetch(
		// 	`http://localhost:8000/itenaryList/` + ItenaryId,
		// 	{
		// 		method: "DELETE",
		// 	}
		// ).then(() => {
		// 	console.log("Itenary Deleted");
		// 	history.push("/");
		// });

		// setItenaryData(...itenaryData,filteredItenaries);
	};
	return (
		<div>
			<div className="w-full p-4">
				<ul>
					{itenaryData && (
						<Itenaries
							itenaryData={itenaryData}
							deleteItenary={deleteItenary}
						/>
					)}
				</ul>
			</div>
		</div>
	);
};

export default Main;
