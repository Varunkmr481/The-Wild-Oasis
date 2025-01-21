import { format } from "date-fns";

import Menus from "../../ui/Menus";
import Table from "../../ui/Table";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";

import UserRow from "./UserRow";
import useUsersData from "./useUsersData";

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

function UserTable() {
  const { isLoading, users, error } = useUsersData();

  if (isLoading) return <Spinner />;
  if (!users?.length) return <Empty resourceName="Users" />;

  console.log(users);
  // console.log(users[0].email);
  // console.log(users[0].user_metadata.fullName);
  // console.log(users[0].created_at);
  // console.log(format(new Date(users[0].last_sign_in_at), "do MMMM yyyy"));

  return (
    <Menus>
      {/* <Table columns="1fr 1.3fr 1.3fr 1.8fr 1.8fr 0.5fr"> */}
      <Table columns="1.4fr 2.4fr 2.4fr 2.4fr 3.3rem">
        <Table.Header>
          {/* <div></div> */}
          <div>Name</div>
          <div>Created at</div>
          <div>Last signin</div>
          <div>Email</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={users}
          render={(user) => <UserRow user={user} key={user.id} />}
        ></Table.Body>
      </Table>
    </Menus>
  );
}

export default UserTable;
