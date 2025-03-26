export default function TableSkeleton({ index }) {
	return (
		<tr key={index}>
			<td className="border border-gray-300 px-2 py-2">
				<div className="h-2 bg-gray-200 rounded w-full animate-pulse"></div>
			</td>
			<td className="border border-gray-300 px-2 py-2">
				<div className="h-2 bg-gray-200 rounded w-full animate-pulse"></div>
			</td>
			<td className="border border-gray-300 px-4 py-2 text-center">
				<div className="h-2 bg-gray-200 rounded w-full animate-pulse"></div>
			</td>
			<td className="border border-gray-300 px-4 py-2 text-center">
				<div className="h-2 bg-gray-200 rounded w-24 animate-pulse"></div>
			</td>
			<td className="border border-gray-300 px-4 py-2 text-center">
				<div className="h-2 bg-gray-200 rounded w-12 animate-pulse"></div>
			</td>
			<td className="border border-gray-300 px-4 py-2 text-center">
				<div className="h-2 bg-gray-200 rounded w-12 animate-pulse"></div>
			</td>
			<td className="border border-gray-300 px-4 py-2 text-center">
				<div className="h-2 bg-gray-200 rounded w-12 animate-pulse"></div>
			</td>
		</tr>
	);
}
