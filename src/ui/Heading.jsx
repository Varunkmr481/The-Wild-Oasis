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
      margin-bottom: 10px;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 10px;
    `}

  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
      margin-bottom: 10px;
    `}

    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      margin-bottom: 10px;
      text-align: center;
    `} /* line-height : 1.4; */
`;

export default Heading;
