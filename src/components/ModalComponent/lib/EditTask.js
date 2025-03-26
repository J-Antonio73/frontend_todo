const apiUrl = import.meta.env.VITE_HOST_BE;

const EditTask = async (task) => {
	try {
		const response = await fetch(`${apiUrl}/api/task/${task.id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(task),
		});
		const data = await response.json();
		return data;
	} catch (error) {
		return new Error("Error al actualizar la tarea");
	}
};

export { EditTask };
