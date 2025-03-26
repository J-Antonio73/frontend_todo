import { useEffect, useState } from "react";
import TableComponent from "../TableComponent/TableComponent";
import ButtonsContainer from "../ButtonsHeader/ButtonsContainer";
import AddModal from "../ModalComponent/AddModal";
import EditModal from "../ModalComponent/EditModal";
import { getTasks } from "../FetchTask/FetchTask";

export default function TodoContainer() {
	const [addIsOpen, setAddIsOpen] = useState(false);
	const [editIsOpen, setEditIsOpen] = useState(false);
	const [data, setData] = useState([]);
	const [editData, setEditData] = useState({});

	useEffect(() => {
		getTasks().then((data) => setData(data));
	}, []);

	const openAddModal = () => setAddIsOpen(true);
	const closeAddModal = () => setAddIsOpen(false);
	const openEditModal = (data) => {
		setEditData(data);
		setEditIsOpen(true);
	};
	const closeEditModal = () => setEditIsOpen(false);
	return (
		<div className="w-full pt-6">
			<ButtonsContainer openModal={openAddModal} />
			<section className="overflow-y-auto max-h-[400px]">
				<TableComponent openModal={openEditModal} data={data} />
			</section>
			{addIsOpen && <AddModal closeModal={closeAddModal} />}
			{editIsOpen && (
				<EditModal closeModal={closeEditModal} data={editData} />
			)}
		</div>
	);
}
