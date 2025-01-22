import styled from "styled-components";
import Table from "../../ui/Table";
import { HiEllipsisVertical, HiTrash } from "react-icons/hi2";
import { format } from "date-fns";
import Menus from "../../ui/Menus";
import useDeleteUser from "./useDeleteUser";
import Modal from "../../ui/Modal";

const StyledName = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const StyledCell = styled.div`
  font-family: "Sono";
  font-weight: 400;
`;

const StyledEmail = styled.div`
  font-family: "Sono";
  font-weight: 300;
`;

function UserRow({
  user: { id, user_metadata, created_at, last_sign_in_at, email },
}) {
  const { deleteUser, isDeleting } = useDeleteUser();
  console.log(id);

  // console.log("user_metadata : ", user_metadata?.fullName);
  // console.log(format(new Date(last_Sign_in_at), "do MMMM yyyy"));

  return (
    <Table.Row>
      <StyledName>{user_metadata?.fullName}</StyledName>

      <StyledCell>{format(new Date(created_at), "do MMMM yyyy")}</StyledCell>

      <StyledCell>
        {(last_sign_in_at &&
          format(new Date(last_sign_in_at), "do MMMM yyyy")) ||
          "-"}
      </StyledCell>

      <StyledEmail>{email}</StyledEmail>

      <Menus.Menu>
        <Menus.Toggle id={id} />

        <Menus.List id={id}>
          <Menus.Button icon={<HiTrash />} onClick={() => deleteUser(id)}>
            Delete User
          </Menus.Button>
        </Menus.List>
      </Menus.Menu>
    </Table.Row>
  );
}

export default UserRow;
