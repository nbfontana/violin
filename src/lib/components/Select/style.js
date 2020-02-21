import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import { inputStyle, inputStyleFocus, inputStyleDisabled } from '../TextField/style';
import { Icon } from '../Icon';
import getFromTheme from '../../utils/getFromTheme';

export const Container = styled.div`
  ${inputStyle}
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;

  ${({ isActive }) => isActive && inputStyleFocus}
`;

export const Filter = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 0%;
  padding-left: 10px;
`;

export const Input = styled.input`
  width: 1px;
  background: transparent;
  border: none;
  font-size: ${getFromTheme('typography.fontSize.body')};
  color: ${getFromTheme('palette.black.900')};
  padding: 0;
  outline: none;
`;

export const Value = styled.div`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: ${getFromTheme('typography.fontSize.body')};
  color: ${getFromTheme('palette.black.400')};
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: default;
  box-sizing: border-box;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
`;

export const ArrowDropdown = styled(Icon)`
  font-size: 24px;
  padding: 0 10px;
  color: ${getFromTheme('palette.black.600')};
  cursor: default;
`;
