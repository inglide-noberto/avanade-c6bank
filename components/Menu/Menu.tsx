import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { Home, FormatAlignJustify, Output, Payments, CreditCard, CreditScore } from '@mui/icons-material';

const MenuContainer = styled.nav`
    display: flex;
    width: 100%;
    flex-direction: column;
    height: 150px;
    background: #242424;
    color: #f8f8f8;
    ul {
        width: 100%;
        margin: 0;
        padding: 0;
        display: flex;        
        flex-direction: column;
        height: 200px;
        overflow: auto;
        &::-webkit-scrollbar-thumb{
            background: #242424;
            outline: 1px solid #777777;
            border-radius: 2px;
        }
        &::-webkit-scrollbar{
            width: 6px;
        }
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
            padding: 10px;
            &:hover{
                background: #888;
                border-left-color: #fffb19;
                cursor: pointer;
            }
            span{
                padding-left: 10px;
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
                        <a> 
                            <Home />
                            <span/>
                            Inicio
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a> 
                            <FormatAlignJustify />
                            <span/>
                            Extrato
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a> 
                            <Output />
                            <span/>
                            Transferências
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a> 
                            <Payments />
                            <span/>
                            Pagamentos
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <a> 
                            <CreditScore />
                            <span/>
                            Crédito
                        </a>
                    </Link>
                </li>

                <li>
                    <Link href="#">
                        <a> 
                            <CreditCard />
                            <span/>
                            Cartões
                        </a>
                    </Link>
                </li>
            </ul>
        </MenuContainer>
    )
}
