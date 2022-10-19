import React from 'react';
import styled from '@emotion/styled';
import ExtractHead from '../ExtractHead';
import ExtractTotal from '../ExtractTotal';
import ExtractData from '../ExtractData';
import db from '../utils/db';

const ExtractContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export default function ExtractContent() {
  return (
    <ExtractContentContainer>
      <ExtractHead/>
      <ExtractTotal/>
      <ExtractData db={db}/>
      <ExtractTotal/>
    </ExtractContentContainer>
  )
}
