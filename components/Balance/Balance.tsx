import React, { useState } from 'react';
import styled from '@emotion/styled';
import {VisibilityOff, Visibility} from '@mui/icons-material';


const BalanceContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 150px;
    color: #f8f8f8;
    background: #242424;
    padding-left: 30px;
    border-bottom: #f8f8f8 solid 1px;
    & div > strong{
        font-size: 1.5rem;
        margin-right: 10%;
    }
    & > button{
    border: none;
    background: transparent;
    color: #f8f8f8;
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
                    {show? <Visibility/> : <VisibilityOff/> }
                </button>
            </div>
        </BalanceContainer>
    )
}
