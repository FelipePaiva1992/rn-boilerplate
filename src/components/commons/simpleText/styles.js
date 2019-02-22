import styled from 'styled-components';

export default styled.Text`
  color: ${props => (props.primary ? 'red' : 'blue')};
`;
