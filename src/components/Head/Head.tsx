import React from "react";
import styled from "styled-components";

const StyleHead = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  margin-bottom: calc(40 / 1440 * 100vw);
  box-shadow: 0 calc(8 / 1440 * 100vw) 10px #e2e2e2;
  box-sizing: border-box;
  padding-left: calc(30 / 1440 * 100vw);
  padding-right: calc(30 / 1440 * 100vw);

  & span {
    height: calc(40 / 1440 * 100vw);
    padding: auto;
    padding-left: calc(15 / 1440 * 100vw);
    padding-right: calc(15 / 1440 * 100vw);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & span:last-child {
    margin-left: auto;
  }
`;

interface HeadProps {}

const Head: React.FC<HeadProps> = props => {
  return (
    <StyleHead>
      <span>LOGO</span>
      <span>Home</span>
      <span>Product</span>
      <span>
        <a href="#">Login</a>
      </span>
    </StyleHead>
  );
};

export default Head;
