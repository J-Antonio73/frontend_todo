const apiUrl = import.meta.env.VITE_HOST_BE;

const AddTask = async (task) => {
	try {
		const response = await fetch(`${apiUrl}/api/task`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(task),
		});
		const data = await response.json();
		return data;
	} catch (error) {
		return new Error("Error al agregar la tarea");
	}
};

export { AddTask };
