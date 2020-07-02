import React from "react";
import styled from "styled-components";

const StyledLayout = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = props => {
  return <StyledLayout>{props.children}</StyledLayout>;
};

export default Layout;
