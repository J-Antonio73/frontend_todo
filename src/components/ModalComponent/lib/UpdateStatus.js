const apiUrl = import.meta.env.VITE_HOST_BE;

const UpdateStatus = async (id) => {
	try {
		const task = {
			completed: 1,
		};
		const response = await fetch(`${apiUrl}/api/task/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(task),
		});
		const data = await response.json(1);
		return data;
	} catch (error) {
		return new Error("Error al actualizar la tarea");
	}
};

export { UpdateStatus };
