import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
	const [globalToken, setGlobalToken] = useState("");
	const [authenticated, setAuthenticated] = useState(false);
	const [pageIsLoaded, setPageIsLoaded] = useState(true);

	return (
		<div>
			{pageIsLoaded ? (
				<AppContext.Provider
					value={{
						globalToken,
						setGlobalToken,
						authenticated,
						setAuthenticated,
					}}
				>
					{children}
				</AppContext.Provider>
			) : (
				<h2>... Page is loading ...</h2>
			)}
		</div>
	);
};
export default AppProvider;
