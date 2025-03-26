import { useState } from "react";
import AddTask from "./AddTask";
import CompletedSwitch from "./CompletedSwitch";

export default function ButtonsContainer({
	completed,
	setCompleted,
	openModal,
	setReload,
}) {
	return (
		<div className="flex flex-col sm:flex-row justify-between items-center mb-4">
			<AddTask openModal={openModal} />
			<CompletedSwitch
				completed={completed}
				setCompleted={setCompleted}
				setReload={setReload}
			/>
		</div>
	);
}
