import React, { useState } from "react";
import { AddTask } from "./lib/AddTask";

export default function AddModal({ closeModal }) {
	const [titulo, setTitulo] = useState("");
	const [descripcion, setDescripcion] = useState("");
	const [fechaLimite, setFechaLimite] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		const task = {
			title: titulo,
			description: descripcion,
			limit_date: fechaLimite,
		};

		const taskAdded = await AddTask(task);
		if (taskAdded instanceof Error) {
			return;
		}
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
						<h2 className="text-xl font-semibold">Agregar Tarea</h2>
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
							value={titulo}
							onChange={(e) => setTitulo(e.target.value)}
							className="w-full p-2 border border-gray-300 rounded mb-4"
							required
						/>
						<label className="block mb-2">Descripción</label>
						<textarea
							value={descripcion}
							onChange={(e) => setDescripcion(e.target.value)}
							className="w-full p-2 border border-gray-300 rounded mb-4"
							required
						></textarea>
						<label className="block mb-2">Fecha Límite</label>
						<input
							type="date"
							value={fechaLimite}
							onChange={(e) => setFechaLimite(e.target.value)}
							className="w-full p-2 border border-gray-300 rounded mb-4"
							required
						/>
						<button
							type="submit"
							className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600 cursor-pointer"
						>
							Guardar
						</button>
					</form>
				</div>
			</div>
		</>
	);
}
