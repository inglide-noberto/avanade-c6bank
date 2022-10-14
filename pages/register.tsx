import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-image: url('/barco.jpg');
  background-repeat: no-repeat;
  background-size: cover;
`;

export default function RegisterPage() {
  return (
    <>
      <Container>register</Container>
    </>
  );
};
