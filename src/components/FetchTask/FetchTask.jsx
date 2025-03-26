const apiUrl = import.meta.env.VITE_HOST_BE;

const getTasks = async (completed) => {
	try {
		const response = await fetch(
			`${apiUrl}/api/tasks${completed ? "/completed" : ""}`
		);
		const data = await response.json();
		return data;
	} catch (error) {
		return new Error("Error al obtener las tareas");
	}
};

export { getTasks };
