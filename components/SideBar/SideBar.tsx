import React from 'react';
import styled from '@emotion/styled';
import Profile from '../Profile';
import Balance from '../Balance';
import Menu from '../Menu';

const SideBarContainer = styled.div`
    display: flex;
    position: fixed;
    flex-direction: column;
    width: 450px;
    height: 100vh;
    background-color: #242424;
`

export default function SideBar() {
  return (
    <SideBarContainer>
        <Profile name='Inglide Noberto' role='Software Engineer' agency={'0001'} accountNumber={'123456789'} />
        <Balance amount={190000}/>
        <Menu/>
    </SideBarContainer>
  )
}
