import { useState } from "react";
import TodoComponent from "../components/TodoComponent/TodoComponent";
import "./App.css";

function App() {
	return (
		<>
			<main className="h-screen mx-[18%] my-0">
				<TodoComponent />
			</main>
		</>
	);
}

export default App;
