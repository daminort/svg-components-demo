import styled from 'styled-components';

export const Wrapper = styled.g`
  
  &.dragging {
    cursor: move;
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
