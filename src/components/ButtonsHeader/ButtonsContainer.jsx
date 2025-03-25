import AddTask from "./AddTask";
import CompletedSwitch from "./CompletedSwitch";

export default function ButtonsContainer({ completed, setCompleted }) {
	return (
		<div className="flex flex-col sm:flex-row justify-between items-center mb-4">
			<AddTask />
			<CompletedSwitch
				completed={completed}
				setCompleted={setCompleted}
			/>
		</div>
	);
}
