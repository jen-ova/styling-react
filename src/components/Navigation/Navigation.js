import React from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledUl = styled.ul`
  background: #444;
  border-radius: 1.5rem;
  border: 0.5rem solid #666;
  color: #666;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  list-style-type: none;
`;

const StyledNavLink = styled(NavLink)`
  text-align: center;

  ${(props) =>
    props.home &&
    css`
      &:hover {
        background-color: #7c4ab7;
        display: block;
      }
    `}

  ${(props) =>
    props.about &&
    css`
      &:hover {
        background-color: #2e8b95;
        display: block;
      }
    `}

    ${(props) =>
    props.contact &&
    css`
      &:hover {
        background-color: #313d6b;
        display: block;
      }
    `}
`;

const Navigation = () => {
  return (
    <StyledUl>
      <StyledNavLink home to="/">
        <li>Home</li>
      </StyledNavLink>
      <StyledNavLink about to="/about">
        <li>About</li>
      </StyledNavLink>
      <StyledNavLink contact to="/contact-us">
        <li>Contact us</li>
      </StyledNavLink>
    </StyledUl>
  );
};

export default Navigation;
