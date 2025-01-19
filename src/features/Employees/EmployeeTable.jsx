import { format } from "date-fns";
import Menus from "../../ui/Menus";
import Table from "../../ui/Table";
import styled from "styled-components";
import { HiEye } from "react-icons/hi";
import { HiEllipsisVertical } from "react-icons/hi2";

const StyledDiv = styled.div`
  font-size: 14px;
`;

const fakeEmployees = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    createdAt: "2023-06-15T08:30:00Z",
    lastSignIn: "2025-01-18T12:45:00Z",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "+1 (555) 234-5678",
    createdAt: "2023-07-20T09:15:00Z",
    lastSignIn: "2025-01-17T14:30:00Z",
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael@example.com",
    phone: "+1 (555) 345-6789",
    createdAt: "2023-05-10T10:00:00Z",
    lastSignIn: "2025-01-16T08:15:00Z",
  },
  {
    id: 4,
    name: "Emily White",
    email: "emily@example.com",
    phone: "+1 (555) 456-7890",
    createdAt: "2023-08-05T11:45:00Z",
    lastSignIn: "2025-01-15T09:00:00Z",
  },
  {
    id: 5,
    name: "Chris Green",
    email: "chris@example.com",
    phone: "+1 (555) 567-8901",
    createdAt: "2023-09-12T12:30:00Z",
    lastSignIn: "2025-01-14T10:30:00Z",
  },
];

function EmployeeTable() {
  return (
    <Menus>
      {/* <Table columns="1fr 1.3fr 1.3fr 1.8fr 1.8fr 0.5fr"> */}
      <Table columns="1.4fr 2.4fr 2.4fr 1.4fr 3.2rem">
        <Table.Header>
          <div>Name</div>
          <div>Created at</div>
          <div>Last signin</div>
          <div>Email</div>
          <div></div>
        </Table.Header>

        {/* <Table.Body data={fakeEmployees} render={()=>}></Table.Body> */}

        {fakeEmployees.map((emp) => (
          <Table.Row key={emp.id}>
            <StyledDiv>{emp.name}</StyledDiv>
            <StyledDiv>
              {format(new Date(emp.createdAt), "do MMMM yyyy")}
            </StyledDiv>
            <StyledDiv>
              {format(new Date(emp.lastSignIn), "do MMMM yyyy")}
            </StyledDiv>
            <StyledDiv>{emp.email}</StyledDiv>
            <StyledDiv>
              <HiEllipsisVertical />
            </StyledDiv>
          </Table.Row>
        ))}
      </Table>
    </Menus>
  );
}

export default EmployeeTable;
