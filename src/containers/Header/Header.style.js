import styled from 'styled-components';
import { THEME } from '../../constants/theme';

export const Wrapper = styled.div`
  display: flex;
  padding: 1rem 3rem;
  background-color: ${THEME.colors.darkGray};
  color: ${THEME.colors.white};
  
  .link {
    cursor: pointer;
    margin-right: 2rem;
    
    &.active {
      font-weight: 500;
      border-bottom: 1px dotted ${THEME.colors.white};
    }
  }
`;
