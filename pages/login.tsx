import React, { FormEvent, useEffect, useState } from "react";
import {
    Typography,
    Container,
    Button,
    TextField,
    Checkbox,
    Box,
    CssBaseline,
    FormControlLabel
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from "../components/utils/Copyright";
import Snackbar from "../components/utils/Snackbar";
import Login from "../components/Form/Login";


const theme = createTheme();

export default function LoginPage() {
    const [email, setEmail] = useState<string | null | undefined>('');
    const [password, setPassword] = useState<string | null | undefined | FormDataEntryValue>('');
    const [error, setError] = useState<boolean>(false);
    const [errorMensage, setErrorMensage] = useState<string>('');
    const [open, setOpen] = useState<boolean>(false);
    const [contador, setContador] = useState<number>(0);

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Login /> 
                <Copyright site="avanade" />
                
            </Container>
        </ThemeProvider>
    );
};