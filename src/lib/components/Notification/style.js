import styled, { css } from 'styled-components';
import { withProp } from 'styled-tools';
import { transparentize, rem } from 'polished';
import getFromTheme from '../../utils/getFromTheme';
import { Icon } from '../Icon';
import { Button } from '../Button';

export const NotificationIcon = styled(Icon)`
  font-size: ${rem(24)};
  padding: 14px 10px 14px 14px;
`

export const NotificationContent = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
`

const info = css`
  background-color: ${getFromTheme('palette.blue.100')};
  border: 1px solid ${withProp(getFromTheme('palette.blue.400'), transparentize(0.85))};
  color: ${getFromTheme('palette.blue.800')};

  ${NotificationIcon} {
    color: ${getFromTheme('palette.blue.600')};
  }

  a {
    font-weight: ${getFromTheme('typography.fontWeight.bold')};
    text-decoration: underline;
    color: ${getFromTheme('palette.blue.800')};
    &:hover {
      color: ${getFromTheme('palette.blue.600')};
    }
  }
`

const warning = css`
  background-color: ${getFromTheme('palette.yellow.100')};
  border: 1px solid ${withProp(getFromTheme('palette.yellow.600'), transparentize(0.85))};
  color: ${getFromTheme('palette.yellow.800')};

  ${NotificationIcon} {
    color: ${getFromTheme('palette.yellow.600')};
  }

  a {
    font-weight: ${getFromTheme('typography.fontWeight.bold')};
    text-decoration: underline;
    color: ${getFromTheme('palette.yellow.800')};
    &:hover {
      color: ${getFromTheme('palette.yellow.600')};
    }
  }
`

const success = css`
  background-color: ${getFromTheme('palette.green.100')};
  border: 1px solid ${withProp(getFromTheme('palette.green.700'), transparentize(0.85))};
  color: ${getFromTheme('palette.green.800')};

  ${NotificationIcon} {
    color: ${getFromTheme('palette.green.700')};
  }

  a {
    font-weight: ${getFromTheme('typography.fontWeight.bold')};
    text-decoration: underline;
    color: ${getFromTheme('palette.green.800')};
    &:hover {
      color: ${getFromTheme('palette.green.500')};
    }
  }
`

const error = css`
  background-color: ${getFromTheme('palette.red.100')};
  border: 1px solid ${withProp(getFromTheme('palette.red.500'), transparentize(0.85))};
  color: ${getFromTheme('palette.red.700')};

  ${NotificationIcon} {
    color: ${getFromTheme('palette.red.700')};
  }

  a {
    font-weight: ${getFromTheme('typography.fontWeight.bold')};
    text-decoration: underline;
    color: ${getFromTheme('palette.red.800')};
    &:hover {
      color: ${getFromTheme('palette.red.500')};
    }
  }
`

export const NotificationWrapper = styled.div`
  font-weight: ${getFromTheme('typography.fontWeight.semiBold')};
  width: 100%;
  border-radius: 4px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 48px auto 62px;
  
  ${(props) => props.type === 'info' && info}
  ${(props) => props.type === 'warning' && warning}
  ${(props) => props.type === 'success' && success}
  ${(props) => props.type === 'error' && error}
`

export const NotificationCloseButton = styled(Button)`
  margin: 6px 6px 6px 16px;
`
export const NotificationFooter = styled.div`
  display: grid;
  grid-auto-columns: min-content;
  grid-auto-flow: column;
  grid-column-gap: 8px;
  margin-top: 16px;
`
