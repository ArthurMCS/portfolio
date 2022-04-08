import React from 'react';
import me from '../images/me2.jpeg';
import { Container, ImgStyled } from '../StyledComponents/Photo';

export default function Photo() {
  return (
    <Container>
      <ImgStyled src={me} alt="Arthur Moreira" />
    </Container>
  );
}
