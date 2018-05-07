import styled from 'styled-components';
import colors from '../Common/Colors';

const HeaderLink = styled.a`
  text-decoration: none;
  margin-left: 10px;
  margin-right: 20px;
  font-weight: 500;
  position: relative;
  color: ${colors.darkTextColor};
  &:hover {
    cursor: pointer;
    color: ${colors.darkTextColor};
  }
  &:before {
    content:"";
    position: absolute;
    width: 100%;
    height: 4px;
    bottom: -7px;
    left: 0;
    background-color: ${colors.sellpyGreen};
    transform: scaleX(0);
    transition: transform 0.6s ease-in-out 0s;
    transform-origin:100% 50%;
  }
  &:hover:before {
    transform: scaleX(1);
    transform-origin:0 50%;
  }
`;

export default HeaderLink;
