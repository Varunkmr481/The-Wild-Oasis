import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

const H1 = styled.h1`
  font-size: 40px;
  font-weight: 600;
  background-color: yellow;
`;

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>The Green Horizons</H1>
        <Button onClick={() => alert("Checking in...")}>Check In</Button>

        <Input type="number" placeholder="Type the no of guests"></Input>
      </StyledApp>
    </>
  );
}

export default App;
