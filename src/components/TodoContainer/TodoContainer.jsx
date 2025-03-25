import TableComponent from "../TableComponent/TableComponent";
import ButtonsContainer from "../ButtonsHeader/ButtonsContainer";

export default function TodoContainer() {
	return (
		<div className="w-full pt-6">
			<ButtonsContainer />
			<TableComponent />
		</div>
	);
}
