import styled from 'styled-components';
import { THEME } from '../../constants/theme';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
  background-color: ${THEME.colors.black};
  color: ${THEME.colors.white};
  
  .left {
    width: 20vw;
    padding-right: 20px;
  }
  .right {
    width: 20vw;
    padding-left: 20px;
  }
`;
