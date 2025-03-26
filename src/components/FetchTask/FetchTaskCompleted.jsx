const apiUrl = import.meta.env.VITE_HOST_BE;

const getTasksCompleted = async () => {
	try {
		const response = await fetch(`${apiUrl}/api/tasks/completed`);
		const data = await response.json();
		return data;
	} catch (error) {
		return new Error("Error al obtener las tareas");
	}
};

export { getTasksCompleted };
