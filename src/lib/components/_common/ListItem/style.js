import styled from 'styled-components';
import { rem } from 'polished';
import { Icon } from '../../Icon';
import getFromTheme from '../../../utils/getFromTheme';

export const StyledItem = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 16px;
  font-size: ${getFromTheme('typography.fontSize.body')};
  color: ${getFromTheme('palette.black.900')};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: ${getFromTheme('palette.black.100')};
  }
`;

export const StyledIcon = styled(Icon)`
  margin-right: 10px;
  font-size: ${rem(24)};
`;
