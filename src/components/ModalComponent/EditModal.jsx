import React, { useState, useEffect } from "react";
import { EditTask } from "./lib/EditTask";
export default function EditModal({
	closeModal,
	data,
	notifySuccess,
	notifyError,
}) {
	const [title, setTitle] = useState(data.title || "");
	const [description, setDescription] = useState(data.description || "");
	const [limitDate, setLimitDate] = useState(data.limit_date || "");

	useEffect(() => {
		setTitle(data.title);
		setDescription(data.description);
		setLimitDate(data.limit_date);
	}, [data]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const task = {
			id: data.id,
			title,
			description,
			limit_date: limitDate,
		};
		const taskAdded = await EditTask(task);
		if (taskAdded instanceof Error) {
			notifyError("Error al actualizar la tarea");
			return;
		}
		notifySuccess("Tarea actualizada correctamente");
		closeModal();
	};

	return (
		<>
			<div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm z-40"></div>
			<div
				className="fixed inset-0 flex justify-center items-center z-50 transition-all transform bg-transparent"
				style={{
					display: "flex",
					opacity: 1,
					transition:
						"opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
				}}
			>
				<div className="bg-white p-6 rounded-lg w-96 shadow-lg transform transition-all duration-300 ease-in-out">
					<div className="flex justify-between items-center">
						<h2 className="text-xl font-semibold">Editar Tarea</h2>
						<button
							className="text-xl font-bold text-red-500 cursor-pointer"
							onClick={closeModal}
						>
							&times;
						</button>
					</div>
					<form onSubmit={handleSubmit} className="mt-4">
						<label className="block mb-2">Título</label>
						<input
							type="text"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							className="w-full p-2 border border-gray-300 rounded mb-4"
							required
						/>
						<label className="block mb-2">Descripción</label>
						<textarea
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							className="w-full p-2 border border-gray-300 rounded mb-4"
							required
						></textarea>
						<label className="block mb-2">Fecha Límite</label>
						<input
							type="date"
							value={limitDate}
							onChange={(e) => setLimitDate(e.target.value)}
							className="w-full p-2 border border-gray-300 rounded mb-4"
							required
						/>
						<button
							type="submit"
							className="w-full py-2 bg-green-500 text-black rounded hover:bg-green-600 cursor-pointer"
						>
							Guardar
						</button>
					</form>
				</div>
			</div>
		</>
	);
}
