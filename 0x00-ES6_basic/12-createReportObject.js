export default function createReportObject(employeesList) {
	const obj = { allEmployees: employeesList }

	obj.getNumberOfDepartments = (item) => Object.keys(item).length;

	return obj
}
