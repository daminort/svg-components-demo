import styled from 'styled-components';
import { THEME } from '../../constants/theme';

export const Wrapper = styled.g`
  
  &.dragging {
    cursor: move;
    
    .box-background {
      stroke-width: 3px;
      stroke: ${THEME.colors.green};
    }
  }
  
  .btn-plus {
    display: none;
  }
  
  &:hover {
    .btn-plus {
      display: initial;
    }
  }
`;
