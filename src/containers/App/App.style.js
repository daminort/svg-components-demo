import styled from 'styled-components';
import { THEME } from '../../constants/theme';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  color: ${THEME.colors.darkGray};
  background-color: aliceblue;
  min-height: calc(100vh - 100px);
`;
