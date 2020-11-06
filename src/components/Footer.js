import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  background-color: #ffffff;  
  width: 100%;
  height: calc(100vh - 90);
  padding: 20px;
`;

const Footer = () => {
  return <StyledFooter>&copy; {new Date().getFullYear()}  Find-A-Flick Movie Search </StyledFooter>;
};

export default Footer;
