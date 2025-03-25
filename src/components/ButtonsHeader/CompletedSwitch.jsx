import { useState } from "react";
export default function CompletedSwitch() {
	const [completed, setCompleted] = useState(false);

	return (
		<div className="flex items-center space-x-4 py-2">
			<p className="text-sm">Mostrar completadas</p>
			<label className="relative inline-flex items-center cursor-pointer">
				<input
					type="checkbox"
					checked={completed}
					onChange={() => setCompleted(!completed)}
					className="sr-only"
				/>
				<span className="w-11 h-6 bg-gray-300 rounded-full inline-flex items-center p-1 transition-colors duration-300">
					<span
						className={`${
							completed
								? "bg-green-500 translate-x-5"
								: "bg-gray-500"
						} w-4 h-4 rounded-full transition-transform duration-300`}
					></span>
				</span>
			</label>
		</div>
	);
}
