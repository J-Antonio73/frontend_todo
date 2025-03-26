const apiUrl = import.meta.env.VITE_HOST_BE;

const DeleteTask = async (id) => {
	try {
		const response = await fetch(`${apiUrl}/api/task/${id}`, {
			method: "DELETE",
		});
		const data = await response.json();
		return data;
	} catch (error) {
		return new Error("Error al eliminar la tarea");
	}
};

export { DeleteTask };
