import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Section = styled.div`
  padding: 15px 25px;

  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
`;

export const NavCss = styled.nav`
  display: flex;
  gap: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: start;
`;

export const NavlinkCss = styled(NavLink)`
  font-weight: 800;
  font-size: 18px;
  line-height: 1.17;
  color: rgba(5, 25, 55, 1);
  letter-spacing: 0.03em;
  text-transform: uppercase;
  transition: all 250ms;

  &:hover,
  &.active {
    color: rgba(27, 163, 196, 1);
  }
`;

export const LoginBoxCss = styled.div`
  display: flex;
  /* margin-left: 1140px; */
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 24px;
  margin-right: auto;
  padding: 4px 24px;
`;

export const UserTextCss = styled.p`
  font-weight: 800;
  font-size: 18px;
  line-height: 1.17;
  color: #92b6ec;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  white-space: nowrap;
  transition: all 250ms;
  margin-left: 900px;
`;

export const ButtonCss = styled.button`
  padding: 8px 10px;
  font: inherit;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid transparent;
  color: #fff;
  font-size: 20px;
  background: rgb(100, 149, 237);
  transition: all 250ms;

  &:hover,
  &:focus {
    color: #fff;
    border: 1px solid #dcd5d5;
    cursor: pointer;
    box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
      0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
  }
`;
