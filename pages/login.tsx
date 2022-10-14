import React, { FormEvent, useEffect, useState } from "react";
import {
    Typography,
    Container,
    Button,
    Avatar,
    TextField,
    Checkbox,
    Grid,
    Box,
    CssBaseline,
    FormControlLabel,
    Stack,
    Snackbar
} from '@mui/material';
import Link from "next/link";
import { createTheme, ThemeProvider } from '@mui/material/styles'
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

type CopyProps = {
    site?: string;
}

function Copyright(props: CopyProps) {
    return (
        <Typography>
            {'Copyright ©️ '}
            <Link color="inherit" href={`https://www.${props.site}.com.br`}>
                {props.site}
            </Link>
            {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

const theme = createTheme();

export default function LoginPage() {
    const [email, setEmail] = useState<string | null | undefined>('');
    const [password, setPassword] = useState<string | null | undefined | FormDataEntryValue>('');
    const [error, setError] = useState<boolean>(false);
    const [errorMensage, setErrorMensage] = useState<string>('');
    const [open, setOpen] = useState<boolean>(false);
    const [contador, setContador] = useState<number>(0);

    const handleClose = () => {
        setOpen(false);
    }

    // executado automáticamente após o primeiro render da page
    // executa a cada vez que recarrega a page
    useEffect(() => {
        if (contador == 0) {
            document.title = `Executando userEffect a primeira vez. Contador: ${contador}`;
        } else {
            document.title = `Executou o userEffect ${contador} vezes.`;
            // vai sp
        }
        console.log(`Executou o contador ${contador} vezes.`);
    }, [contador]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);

        setPassword(data.get('password'));

    }

    useEffect(() => {
        if (password && password.length < 6) {
            setError(true);
            setErrorMensage('A senha dever ter no mínimo 6 caracteres');
        } else if(password) {
            setError(false);
            setErrorMensage('');

            // chamar a API do server para validar usuário e senha.
            // adicionar o snackbar
            setOpen(true);
            // fazer o redirect
        }
    }, [password]);

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Stack>
                    <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            Usuário logado com sucesso... Aguarde!
                        </Alert>
                    </Snackbar>
                </Stack>
                <Box sx={{
                    mt: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Typography component="h1" variant="h5">
                        Tela de Login
                    </Typography>
                    {/* Qualquer comentário */}
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <TextField margin="normal" required id="email" name="email" variant="standard" fullWidth label="Digite o login" autoComplete="email" />
                        <TextField margin="normal" required id="password" name="password" variant="standard" fullWidth type="password" label="Digite a senha" autoComplete="current-password" />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Lembrar-me"
                        />
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                            Login
                        </Button>
                        {error && <Typography color="error">{errorMensage}</Typography>}
                    </Box>
                </Box>
                <Copyright site="avanade" />

            </Container>
        </ThemeProvider>
    );
};