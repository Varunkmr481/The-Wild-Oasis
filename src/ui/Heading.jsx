import styled, { css } from "styled-components";

// const test = css`
//   text-align: center;
//   ${"" /* ${10 > 5 && "background-color : blue"} */}
// `;

const Heading = styled.h1`
  // cl-back fn, return value
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      background-color: yellow;
      margin-bottom: 10px;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
      background-color: blue;
      margin-bottom: 10px;
    `}

  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
      background-color: lightgreen;
      margin-bottom: 10px;
    `}
`;

export default Heading;
