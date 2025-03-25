import TodoContainer from "../TodoContainer/TodoContainer";

export default function TodoComponent() {
	return (
		<div className="flex flex-col items-center justify-center pt-12">
			<h1 className="text-3xl">Lista de tareas</h1>
			<TodoContainer />
		</div>
	);
}
