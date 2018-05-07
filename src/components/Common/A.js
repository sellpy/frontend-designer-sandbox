import styled from 'styled-components';
import colors from './Colors';

const A = styled.a`
  text-decoration: none;
  color: ${colors.darkTextColor};
  transition: all 0.4s ease-in-out;
  &:hover {
    color: ${colors.sellpyBlue};
    cursor: pointer;
  }
`;

export default A;
