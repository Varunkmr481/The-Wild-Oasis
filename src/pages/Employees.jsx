import Heading from "../ui/Heading";
import Row from "../ui/Row";
import UserTable from "../features/Users/UserTable";

function Employees() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Employees</Heading>
      </Row>

      <Row>
        <UserTable />
      </Row>
    </>
  );
}

export default Employees;
