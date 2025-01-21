import styled from "styled-components";
import Table from "../../ui/Table";
import { HiEllipsisVertical } from "react-icons/hi2";
import { format } from "date-fns";

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
  user: { user_metadata, created_at, last_sign_in_at, email },
}) {
  // console.log("user_metadata : ", user_metadata?.fullName);
  // console.log(format(new Date(last_sign_in_at), "do MMMM yyyy"));
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

      <div>
        <HiEllipsisVertical />
      </div>
    </Table.Row>
  );
}

export default UserRow;
