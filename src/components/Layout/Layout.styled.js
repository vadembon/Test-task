import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  height: 60px;
  border-bottom: 2px solid #ebd8ff;
  display: flex;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  border-radius: 6px;
  color: #ebd8ff;
  text-decoration: none;
  font-size: 22px;
  &:not(:first-child) {
    margin-left: 16px;
  }
  &.active {
    color: #4b2a99;
  }
`;

export const Nav = styled.nav`
  margin-left: 136px;
`;
