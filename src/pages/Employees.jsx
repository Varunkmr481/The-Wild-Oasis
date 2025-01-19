import Heading from "../ui/Heading";
import Row from "../ui/Row";
import EmployeeTable from "../features/Employees/EmployeeTable";

function Employees() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Employees</Heading>
      </Row>

      <Row>
        <EmployeeTable />
      </Row>
    </>
  );
}

export default Employees;
