import TableSkeleton from "./TableSkeleton";
export default function TableComponent({ openModal, data, openConfirmation }) {
	const isLoading = data.length === 0;

	return (
		<>
			<table className="table-auto w-full border-collapse border border-gray-400">
				<thead>
					<tr>
						<th className="border border-gray-300 px-4 py-2 text-center">
							Titulo
						</th>
						<th className="border border-gray-300 px-4 py-2 text-center">
							Descripcion
						</th>
						<th className="border border-gray-300 px-4 py-2 text-center">
							Fecha limite
						</th>
						<th className="border border-gray-300 px-4 py-2 text-center">
							Estado
						</th>
						<th className="border border-gray-300 px-2 py-2 text-center">
							Completar
						</th>
						<th className="border border-gray-300 px-2 py-2 text-center">
							Editar
						</th>
						<th className="border border-gray-300 px-2 py-2 text-center">
							Eliminar
						</th>
					</tr>
				</thead>

				<tbody>
					{isLoading
						? Array.from({ length: 5 }).map((_, index) => (
								<TableSkeleton key={index} index={index} />
						  ))
						: data.map((task) => (
								<tr key={task.id}>
									<td className="border border-gray-300 px-2 py-2">
										{task.title}
									</td>
									<td className="border border-gray-300 px-2 py-2">
										{task.description}
									</td>
									<td className="border border-gray-300 px-4 py-2 text-center">
										{task.limit_date}
									</td>
									<td className="border border-gray-300 px-4 py-2 text-center">
										{task.completed === 1 ? (
											<span className="bg-green-200 text-green-800 px-2 py-1 rounded-lg text-sm font-semibold">
												Completado
											</span>
										) : (
											<span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-lg text-sm font-semibold">
												En proceso
											</span>
										)}
									</td>
									<td className="border border-gray-300 px-4 py-2 text-center">
										<button
											onClick={() => {
												openConfirmation(
													"Completar esta tarea?",
													"update",
													task.id
												);
											}}
											className="text-green-600 hover:text-green-800 focus:outline-none cursor-pointer"
										>
											<i className="fa-solid fa-xl fa-square-check"></i>
										</button>
									</td>
									<td className="border border-gray-300 px-4 py-2 text-center">
										<button
											onClick={() => openModal(task)}
											className="text-blue-600 hover:text-blue-700 focus:outline-none cursor-pointer"
										>
											<i className="fa-solid fa-xl fa-pen-to-square "></i>
										</button>
									</td>
									<td className="border border-gray-300 px-4 py-2 text-center">
										<button
											onClick={() => {
												openConfirmation(
													"Eliminar esta tarea?",
													"delete",
													task.id
												);
											}}
											className="text-red-600 hover:text-red-700 focus:outline-none cursor-pointer"
										>
											<i className="fa-solid fa-xl fa-square-minus"></i>
										</button>
									</td>
								</tr>
						  ))}
				</tbody>
			</table>
		</>
	);
}
