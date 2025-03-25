import React, { useState } from "react";
export default function AddTask({ openModal }) {
	return (
		<button
			className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
			onClick={openModal}
		>
			Agregar tarea
		</button>
	);
}
