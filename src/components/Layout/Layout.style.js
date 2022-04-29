import styled from 'styled-components';
import { THEME } from '../../constants/theme';

export const Wrapper = styled.div`
  display: block;
  position: relative;
  background-color: ${THEME.colors.white};
  box-shadow: 3px 3px 3px 1px ${THEME.colors.lightGray};
  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
`;
