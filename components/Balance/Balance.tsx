import React, { useState } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const BalanceContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 150px;
    color: #f8f8f8;
    background: #242424;
    padding-left: 30px;
    padding-bottom: 10px;
    border-bottom: #f8f8f8 solid 1px;
    & div > strong{
        font-size: 1.5rem;
        margin-right: 10%;
    }
`;
type BalanceProps = {
    amount: number;
}
export default function Balance(props: BalanceProps) {
    const [show, setShow] = useState<boolean>(false);
    return (
        <BalanceContainer>
            <p>Saldo</p>
            <div>
                {show ?
                    <strong>{new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(props.amount)}</strong>
                : 
                    <strong>R$ ***,**</strong>
                }
                <button onClick={()=>setShow(!show)}>
                    {show? 'Esconder': 'Mostrar'}
                </button>
            </div>
        </BalanceContainer>
    )
}
