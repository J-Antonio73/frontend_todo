import { useState, useMemo } from "react";

export default function TableSort(data, defaultKey = "limit_date") {
	const [sortConfig, setSortConfig] = useState({
		key: defaultKey,
		direction: "asc",
	});

	const sortedData = useMemo(() => {
		if (!data) return [];
		return [...data].sort((a, b) => {
			if (sortConfig.key === "completed") {
				return sortConfig.direction === "asc"
					? a.completed - b.completed
					: b.completed - a.completed;
			}
			if (sortConfig.key === "limit_date") {
				return sortConfig.direction === "asc"
					? new Date(a.limit_date) - new Date(b.limit_date)
					: new Date(b.limit_date) - new Date(a.limit_date);
			}
			return 0;
		});
	}, [data, sortConfig]);

	const requestSort = (key) => {
		let direction = "asc";
		if (sortConfig.key === key && sortConfig.direction === "asc") {
			direction = "desc";
		}
		setSortConfig({ key, direction });
	};

	const getSortIcon = (key) => {
		if (sortConfig.key !== key) return "↕";
		return sortConfig.direction === "asc" ? "↑" : "↓";
	};

	return { sortedData, requestSort, getSortIcon };
}
