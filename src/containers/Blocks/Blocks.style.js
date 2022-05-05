import styled from 'styled-components';
import { THEME } from '../../constants/theme';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 60vw;
  height: 80vh;
  background-color: ${THEME.colors.white};
  overflow: hidden;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;
