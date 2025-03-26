const apiUrl = import.meta.env.VITE_HOST_BE;

const getTasks = async () => {
	try {
		const response = await fetch(`${apiUrl}/api/tasks`);
		const data = await response.json();
		return data;
	} catch (error) {
		return new Error("Error al obtener las tareas");
	}
};

export { getTasks };
