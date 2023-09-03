/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const TouchableOpacityStyled = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme?.colors?.purple};
  flex-direction: row;
  border-radius: 10px;
  height: 40px;
  padding-left: 15;
  padding-right: 15;
  align-self: ${({ block }) => (block ? 'stretch' : 'center')};
`;

export const TextStyled = styled.Text`
  color: white;
  font-size: ${({ theme }) => theme?.fontSizes?.md};
`;
