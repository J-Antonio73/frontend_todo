import React from "react";
import { DeleteTask } from "./lib/DeleteTask";
import { UpdateStatus } from "./lib/UpdateStatus";

export default function ConfirmModal({
	closeModal,
	confirmationMessage,
	confirmationData,
	notifySuccess,
	notifyError,
}) {
	const onConfirm = async () => {
		if (confirmationData.type === "delete") {
			const taskDeleted = await DeleteTask(confirmationData.id);
			if (taskDeleted instanceof Error) {
				notifyError("Error al eliminar la tarea");
				return;
			}
			notifySuccess("Tarea eliminada correctamente");
			closeModal();
		}
		if (confirmationData.type === "update") {
			const taskUpdated = await UpdateStatus(confirmationData.id);
			if (taskUpdated instanceof Error) {
				notifyError("Error al actualizar la tarea");
				return;
			}
			notifySuccess("Tarea actualizada correctamente");
			closeModal();
		}
	};

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
			<div className="bg-white p-6 rounded-md w-96 shadow-lg">
				<div className="text-center">
					<h2 className="text-xl font-semibold">
						{confirmationMessage}
					</h2>
					<div className="flex justify-center mt-6 space-x-4">
						<button
							onClick={() => closeModal()}
							className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
						>
							Cancelar
						</button>
						<button
							onClick={() => {
								onConfirm();
								closeModal();
							}}
							className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
						>
							Confirmar
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
