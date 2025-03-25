import { useState } from "react";
import TableComponent from "../TableComponent/TableComponent";
import ButtonsContainer from "../ButtonsHeader/ButtonsContainer";
import AddModal from "../ModalComponent/AddModal";

export default function TodoContainer() {
	const [isOpen, setIsOpen] = useState(false);
	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);
	return (
		<div className="w-full pt-6">
			<ButtonsContainer openModal={openModal} />
			<TableComponent />
			{isOpen && <AddModal closeModal={closeModal} />}
		</div>
	);
}
