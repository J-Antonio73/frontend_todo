export default function TableComponent() {
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
						<th className="border border-gray-300 px-4 py-2 text-center">
							Completar
						</th>
						<th className="border border-gray-300 px-4 py-2 text-center">
							Editar
						</th>
						<th className="border border-gray-300 px-4 py-2 text-center">
							Eliminar
						</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td className="border border-gray-300 px-2 py-2 ">
							Comer
						</td>
						<td className="border border-gray-300 px-2 py-2 ">
							Comer pizza
						</td>
						<td className="border border-gray-300 px-4 py-2 text-center">
							2021-10-10
						</td>
						<td className="border border-gray-300 px-4 py-2 text-center">
							<span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-lg text-sm font-semibold">
								En proceso
							</span>
						</td>
						<td className="border border-gray-300 px-4 py-2 text-center">
							<button className="text-green-600 hover:text-green-800 focus:outline-none cursor-pointer">
								<i className="fa-solid fa-xl fa-square-check"></i>
							</button>
						</td>
						<td className="border border-gray-300 px-4 py-2 text-center">
							<button className="text-blue-600 hover:text-blue-700 focus:outline-none cursor-pointer">
								<i className="fa-solid fa-xl fa-pen-to-square "></i>
							</button>
						</td>
						<td className="border border-gray-300 px-4 py-2 text-center">
							<button className="text-red-600 hover:text-red-700 focus:outline-none cursor-pointer">
								<i className="fa-solid fa-xl fa-square-minus"></i>
							</button>
						</td>
					</tr>
					<tr>
						<td className="border border-gray-300 px-2 py-2 ">
							Estudiar
						</td>
						<td className="border border-gray-300 px-2 py-2 ">
							Estudiar react
						</td>
						<td className="border border-gray-300 px-4 py-2 text-center">
							2021-10-10
						</td>
						<td className="border border-gray-300 px-4 py-2 text-center">
							<span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-lg text-sm font-semibold">
								En proceso
							</span>
						</td>
						<td className="border border-gray-300 px-4 py-2 text-center">
							<button className="text-green-600 hover:text-green-800 focus:outline-none cursor-pointer">
								<i className="fa-solid fa-xl fa-square-check"></i>
							</button>
						</td>
						<td className="border border-gray-300 px-4 py-2 text-center">
							<button className="text-blue-600 hover:text-blue-700 focus:outline-none cursor-pointer">
								<i className="fa-solid fa-xl fa-pen-to-square "></i>
							</button>
						</td>
						<td className="border border-gray-300 px-4 py-2 text-center">
							<button className="text-red-600 hover:text-red-700 focus:outline-none cursor-pointer">
								<i className="fa-solid fa-xl fa-square-minus"></i>
							</button>
						</td>
					</tr>
					<tr>
						<td className="border border-gray-300 px-2 py-2 ">
							Trabajar
						</td>
						<td className="border border-gray-300 px-2 py-2 ">
							Trabajar en proyecto
						</td>
						<td className="border border-gray-300 px-4 py-2 text-center">
							2021-10-10
						</td>
						<td className="border border-gray-300 px-4 py-2 text-center">
							<span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-lg text-sm font-semibold">
								En proceso
							</span>
						</td>
						<td className="border border-gray-300 px-4 py-2 text-center">
							<button className="text-green-600 hover:text-green-800 focus:outline-none cursor-pointer">
								<i className="fa-solid fa-xl fa-square-check"></i>
							</button>
						</td>
						<td className="border border-gray-300 px-4 py-2 text-center">
							<button className="text-blue-600 hover:text-blue-700 focus:outline-none cursor-pointer">
								<i className="fa-solid fa-xl fa-pen-to-square "></i>
							</button>
						</td>
						<td className="border border-gray-300 px-4 py-2 text-center">
							<button className="text-red-600 hover:text-red-700 focus:outline-none cursor-pointer">
								<i className="fa-solid fa-xl fa-square-minus"></i>
							</button>
						</td>
					</tr>
					<tr>
						<td className="border border-gray-300 px-2 py-2 ">
							Comer
						</td>
						<td className="border border-gray-300 px-2 py-2 ">
							Comer pizza
						</td>
						<td className="border border-gray-300 px-4 py-2 text-center">
							2021-10-10
						</td>
						<td className="border border-gray-300 px-4 py-2 text-center">
							<span className="bg-green-200 text-green-800 px-2 py-1 rounded-lg text-sm font-semibold">
								Completado
							</span>
						</td>
						<td className="border border-gray-300 px-4 py-2 text-center">
							<button className="text-green-600 hover:text-green-800 focus:outline-none cursor-pointer">
								<i className="fa-solid fa-xl fa-square-check"></i>
							</button>
						</td>
						<td className="border border-gray-300 px-4 py-2 text-center">
							<button className="text-blue-600 hover:text-blue-700 focus:outline-none cursor-pointer">
								<i className="fa-solid fa-xl fa-pen-to-square "></i>
							</button>
						</td>
						<td className="border border-gray-300 px-4 py-2 text-center">
							<button className="text-red-600 hover:text-red-700 focus:outline-none cursor-pointer">
								<i className="fa-solid fa-xl fa-square-minus"></i>
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</>
	);
}
