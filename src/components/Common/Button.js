/* The Button component
 * Default is a grey filled button
 *
 * To add colors:
 *    <Button blue /> (blue, green, yellow)
 * To use outlined style:
 *    <Button outlined /> (blue, green, yellow)
 * To set size:
 * <Button small /> or <Button size="40px"/>
 * 
 */
import styled from 'styled-components';
import colors from './Colors';

const Button = styled.button`
  padding: ${props => props.small ? '5px 30px' : '10px 30px'};
  font-size: ${props => props.small ? '0.9em' : '1em'};
  border-style: solid;
  border-width: 2px;
  white-space: nowrap;
  font-size:0.8em;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: uppercase;
  transition: all 0.4s ease-in;
  border-color: ${props =>
    (!props.outlined && 'transparent' )
    || (props.blue && colors.sellpyBlue)
    || (props.green && colors.sellpyGreen)
    || (props.yellow && colors.sellpyYellow)
    || (props.outlined && 'black')
  };
  color: ${props =>
    (((props.blue || props.green) && !props.outlined) && 'white' )
    || ((!(props.blue || props.green) && !props.outlined) && colors.darkTextColor)
    || ((props.blue && props.outlined) && colors.sellpyBlue)
    || ((props.green && props.outlined) && colors.sellpyGreen)
    || ((props.yellow && props.outlined) && colors.sellpyYellow)
  };
  background-color: ${props =>
    ((props.blue && !props.outlined) && colors.sellpyBlue)
    || ((props.green && !props.outlined) && colors.sellpyGreen)
    || ((props.yellow && !props.outlined) && colors.sellpyYellow)
    || (props.outlined && 'transparent')
    || (!props.outlined && colors.lightGrey)
  };
  font-weight: 400;

  &:hover {
    cursor: ${props => props.disabled? 'default' : 'pointer'};
    background-color: ${props =>
      ((props.blue && !props.outlined) && colors.sellpyBlueLight)
      || ((props.green && !props.outlined) && colors.sellpyGreenLight)
      || ((props.yellow && !props.outlined) && colors.sellpyYellowLight)
      || ((props.blue && props.outlined) && colors.sellpyBlue)
      || ((props.green && props.outlined) && colors.sellpyGreen)
      || ((props.yellow && props.outlined) && colors.sellpyYellow)
    };
    color: ${props =>
      ((props.outlined && (props.blue || props.green || props.yellow))&& 'white')
    };
  }
  @media (max-width: 800px) {
    padding: ${props => props.small ? '5px 15px' : '10px 15px'};
  }
  @media (max-width: 550px) {
    padding: ${props => props.small ? '5px 20px' : '10px 20px'};
  }
`;

export default Button;
