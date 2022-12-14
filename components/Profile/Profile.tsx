import React from 'react';
import styled from '@emotion/styled';
import { Avatar } from '@mui/material';
import { CopyAll } from '@mui/icons-material';


const ProfileContainer = styled.div`
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 400px;
    background-color: #242424;
    color: #f8f8f8;
    h2, h3{
        margin: 0;
        font-weight: 400;
        padding: 2px;
    }
`

const Account = styled.div`
    display: flex;
    width: 80%;
    border: solid 0.5px #888;
    border-radius: 2px;
    margin-top: 5%;
    div:first-child {
        width: 80%;
        padding-left: 20px;
        & > div{
            width: 100%;
        }
    }
    div.copy{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`
type ProfileProps = {
    name: string;
    role: string;
    agency: string;
    accountNumber: string;
}
export default function Profile(props: ProfileProps) {
    return (
        <ProfileContainer>
            <Avatar alt={props.name} src='https://avatars.githubusercontent.com/u/73858741?v=4' sx={{ width: 100, height: 100 }} />
            <h2>{props.name}</h2>
            <h3>{props.role}</h3>
            <Account>
                <div>
                    <p>336 - Banco C6 S.A</p>
                    <p>Ag: {props.agency} C/C: {props.accountNumber}</p>
                </div>
                <div className='copy'>
                    <CopyAll />
                </div>
            </Account>
        </ProfileContainer>
    )
}
