import { useEffect, useState } from "react";
import TableComponent from "../TableComponent/TableComponent";
import ButtonsContainer from "../ButtonsHeader/ButtonsContainer";
import AddModal from "../ModalComponent/AddModal";
import EditModal from "../ModalComponent/EditModal";
import ConfirmModal from "../ModalComponent/ConfirmationModal";
import { getTasks } from "../FetchTask/FetchTask";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function TodoContainer() {
	const [addIsOpen, setAddIsOpen] = useState(false);
	const [editIsOpen, setEditIsOpen] = useState(false);
	const [data, setData] = useState([]);
	const [editData, setEditData] = useState({});
	const [confirmation, setConfirmation] = useState(false);
	const [confirmationMessage, setConfirmationMessage] = useState("");
	const [confirmationData, setConfirmationData] = useState({});
	const [completed, setCompleted] = useState(false);
	const [reload, setReload] = useState(false);

	useEffect(() => {
		getTasks(completed).then((data) => setData(data));
	}, [reload]);

	const openAddModal = () => setAddIsOpen(true);
	const closeAddModal = () => setAddIsOpen(false);
	const openEditModal = (data) => {
		setEditData(data);
		setEditIsOpen(true);
	};
	const closeEditModal = () => setEditIsOpen(false);
	const openConfirmation = (message, type, id) => {
		setConfirmation(true);
		setConfirmationData({ type, id });
		setConfirmationMessage(message);
	};
	const closeConfirmation = () => setConfirmation(false);

	const notifySuccess = (message) => {
		setReload(!reload);
		toast.success(message, {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: false,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
			transition: Bounce,
		});
	};

	const notifyError = (message) => {
		setReload(!reload);
		toast.error(message, {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: false,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
			transition: Bounce,
		});
	};

	return (
		<div className="w-full pt-6">
			<ButtonsContainer
				completed={completed}
				setCompleted={setCompleted}
				openModal={openAddModal}
				setReload={setReload}
			/>
			<section className="overflow-y-auto max-h-[400px]">
				<TableComponent
					openModal={openEditModal}
					data={data}
					openConfirmation={openConfirmation}
				/>
			</section>
			{addIsOpen && (
				<AddModal
					closeModal={closeAddModal}
					notifySuccess={notifySuccess}
					notifyError={notifyError}
				/>
			)}
			{editIsOpen && (
				<EditModal
					closeModal={closeEditModal}
					data={editData}
					notifySuccess={notifySuccess}
					notifyError={notifyError}
				/>
			)}
			{confirmation && (
				<ConfirmModal
					closeModal={closeConfirmation}
					confirmationMessage={confirmationMessage}
					confirmationData={confirmationData}
					notifySuccess={notifySuccess}
					notifyError={notifyError}
				/>
			)}
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick={false}
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
				transition={Bounce}
			/>
		</div>
	);
}
