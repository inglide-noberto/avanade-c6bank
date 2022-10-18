import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const MenuContainer = styled.nav`
    display: flex;
    width: 100%;
    flex-direction: column;
    width: 100%;
    background: #242424;
    color: #f8f8f8;
    ul {
        width: 100%;
        margin: 0;
        padding: 0;
        display: flex;        
        flex-direction: column;
        padding-left: 30px;
        li{
            font-size: 1.2rem;
            font-weight: 400;
            width: 100%;
            display: flex;
            list-style: none;
            line-height: 40px;
            border: solid 4px transparent;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;    
            &:hover{
                background: #888;
                border-left-color: #fffb19;
                cursor: pointer;
            }
        }
    }
`;
export default function Menu() {
    return (
        <MenuContainer>
            <ul>
                <li>
                    <Link href="/">
                        {/*<Icon type="home"*/}
                        <a>Inicio</a>
                    </Link>
                </li>
                <li>
                    <Link href="#"> Extrato </Link></li>

                <li>
                    <Link href="#"> Transferências</Link></li>

                <li>
                    <Link href="#"> Pagamentos</Link></li>

                <li>
                    <Link href="#"> Crédito</Link></li>

                <li>
                    <Link href="#"> Cartões</Link></li>
            </ul>
        </MenuContainer>
    )
}
