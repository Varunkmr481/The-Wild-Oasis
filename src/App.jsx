import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">h1: The Wild Oasis</Heading>
        <Heading as="h2">h2: The Wild Oasis</Heading>
        <Heading as="h3">h3: The Wild Oasis</Heading>
        <Button onClick={() => alert("Checking in...")}>Check In</Button>

        <Input type="number" placeholder="Type the no of guests"></Input>
      </StyledApp>
    </>
  );
}

export default App;
