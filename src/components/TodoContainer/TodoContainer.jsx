import { useState } from "react";
import TableComponent from "../TableComponent/TableComponent";
import ButtonsContainer from "../ButtonsHeader/ButtonsContainer";
import AddModal from "../ModalComponent/AddModal";
import EditModal from "../ModalComponent/EditModal";

export default function TodoContainer() {
	const [addIsOpen, setAddIsOpen] = useState(false);
	const [editIsOpen, setEditIsOpen] = useState(false);
	const [data, setData] = useState("");
	const openAddModal = () => setAddIsOpen(true);
	const closeAddModal = () => setAddIsOpen(false);
	const openEditModal = (data) => {
		setData(data);
		setEditIsOpen(true);
	};
	const closeEditModal = () => setEditIsOpen(false);
	return (
		<div className="w-full pt-6">
			<ButtonsContainer openModal={openAddModal} />
			<TableComponent openModal={openEditModal} />
			{addIsOpen && <AddModal closeModal={closeAddModal} />}
			{editIsOpen && (
				<EditModal closeModal={closeEditModal} data={data} />
			)}
		</div>
	);
}
