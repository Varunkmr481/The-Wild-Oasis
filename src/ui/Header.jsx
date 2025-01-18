import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";
import { Link, useNavigate } from "react-router-dom";
import ButtonIcon from "./ButtonIcon";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`;

function Header() {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <ButtonIcon onClick={() => navigate("/account")}>
        <UserAvatar />
      </ButtonIcon>

      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
