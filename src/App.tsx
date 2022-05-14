import React from "react";

import { QueryClient, QueryClientProvider } from "react-query";
import { GlobalStyle } from "./styles/global";
import MyRoutes from "./routes/MyRoutes";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<div className="App">
				<GlobalStyle />
				<MyRoutes />
			</div>
		</QueryClientProvider>
	);
}

export default App;
